import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * HeroDataLattice Component
 * A 3D WebGL data lattice scene built with Three.js.
 * Comprises instanced champagne gold nodes joined by dynamic graph edge lines forming a neural crystal.
 * Includes damped pointer parallax, subtle scroll-driven camera dolly, procedural lighting,
 * and automatic resource disposal with a graceful SVG fallback.
 */
export function HeroDataLattice({ className = "" }) {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [is3dDisabled, setIs3dDisabled] = useState(false);

  useEffect(() => {
    // Check localStorage preference or reduced motion
    const saved3d = localStorage.getItem("portfolio_3d_disabled") === "true";
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");

    setIs3dDisabled(saved3d);
    setIsReducedMotion(reduced);

    // Test WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch (_) {
      setWebglSupported(false);
      return;
    }

    if (saved3d || reduced) return;

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 600;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080c, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const isMobile = window.innerWidth < 768;
    const maxDPR = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(maxDPR);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Procedural Lighting (Champagne Gold + Ivory + Indigo Atmospheric Rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xd6b979, 3.5, 20);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x3b3f9e, 2.5, 18);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xf0dda8, 1.8, 15);
    fillLight.position.set(0, -3, 4);
    scene.add(fillLight);

    // 3. Procedural Lattice Geometry (Graph Crystal)
    const nodeCount = isMobile ? 24 : 42;
    const nodePositions = [];
    const radius = 2.4;

    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution on sphere with random depth jitter
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const jitter = 0.85 + Math.random() * 0.3;

      const x = radius * Math.sin(phi) * Math.cos(theta) * jitter;
      const y = radius * Math.sin(phi) * Math.sin(theta) * jitter;
      const z = radius * Math.cos(phi) * jitter;
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Instanced Mesh for Crystal Nodes
    const nodeGeometry = new THREE.IcosahedronGeometry(0.08, 1);
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd6b979,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x9c7f3f,
      emissiveIntensity: 0.2,
    });

    const instancedNodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
    const dummy = new THREE.Object3D();

    nodePositions.forEach((pos, i) => {
      dummy.position.copy(pos);
      const scale = 0.8 + Math.random() * 0.5;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);
    });
    instancedNodes.instanceMatrix.needsUpdate = true;
    scene.add(instancedNodes);

    // Edge Lines connecting nearest neighbors
    const linePositions = [];
    const maxConnectionDistance = 1.6;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < maxConnectionDistance) {
          linePositions.push(
            nodePositions[i].x,
            nodePositions[i].y,
            nodePositions[i].z,
            nodePositions[j].x,
            nodePositions[j].y,
            nodePositions[j].z
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd6b979,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
    });

    const latticeLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(latticeLines);

    // Inner Core Pulsing Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.55, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf0dda8,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // 4. Interactive Pointer & Scroll Physics
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let targetScrollY = 0;
    let isVisible = true;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.45;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 5. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer damping (slerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      scrollY += (targetScrollY - scrollY) * 0.08;

      // Rotate lattice
      const baseSpeed = 0.18;
      instancedNodes.rotation.y = elapsedTime * baseSpeed + mouse.x;
      instancedNodes.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 - mouse.y;

      latticeLines.rotation.copy(instancedNodes.rotation);

      // Pulse core
      coreMesh.rotation.y = -elapsedTime * 0.35;
      coreMesh.rotation.z = elapsedTime * 0.2;
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.06;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Scroll camera dolly
      camera.position.z = 7.5 + scrollY * 0.0018;
      camera.position.y = -scrollY * 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Cleanup & Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js resources
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [is3dDisabled, isReducedMotion]);

  if (!webglSupported || isReducedMotion || is3dDisabled) {
    return (
      <div
        className={`webgl-fallback-poster w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        {/* Crisp Procedural SVG Vector Lattice Poster */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full max-w-[420px] max-h-[420px] opacity-70 filter drop-shadow-[0_0_24px_rgba(214,185,121,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="140" stroke="#D6B979" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.4" />
          <polygon points="200,60 320,270 80,270" stroke="#D6B979" strokeWidth="1" opacity="0.5" />
          <polygon points="200,340 320,130 80,130" stroke="#F0DDA8" strokeWidth="0.8" opacity="0.4" />
          <circle cx="200" cy="60" r="5" fill="#D6B979" />
          <circle cx="320" cy="270" r="5" fill="#D6B979" />
          <circle cx="80" cy="270" r="5" fill="#D6B979" />
          <circle cx="200" cy="340" r="4" fill="#F0DDA8" />
          <circle cx="320" cy="130" r="4" fill="#F0DDA8" />
          <circle cx="80" cy="130" r="4" fill="#F0DDA8" />
          <circle cx="200" cy="200" r="7" fill="#F3EFE6" stroke="#D6B979" strokeWidth="2" />
          <line x1="200" y1="60" x2="200" y2="340" stroke="#D6B979" strokeWidth="0.6" opacity="0.3" />
          <line x1="80" y1="130" x2="320" y2="270" stroke="#D6B979" strokeWidth="0.6" opacity="0.3" />
          <line x1="80" y1="270" x2="320" y2="130" stroke="#D6B979" strokeWidth="0.6" opacity="0.3" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`webgl-canvas-container w-full h-full relative overflow-hidden pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}

export default HeroDataLattice;

