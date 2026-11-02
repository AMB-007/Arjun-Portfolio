import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * SkillCanvasObject Component
 * Renders one of three real-time procedural Three.js 3D objects:
 *   1. "analytics": Stacked 3D bars & analytical coordinate lattice with gold specular glints
 *   2. "neural": Multi-layer interconnected neural sphere cluster with pulsing synapse edges
 *   3. "systems": Layered glass cube / microservice cloud container with gold wireframe borders
 * Includes slow idle rotation, rise & tilt on card hover, and graceful SVG fallback.
 */
export function SkillCanvasObject({ type = "analytics", isHovered = false, className = "" }) {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [is3dDisabled, setIs3dDisabled] = useState(false);

  useEffect(() => {
    const saved3d = localStorage.getItem("portfolio_3d_disabled") === "true";
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");

    setIs3dDisabled(saved3d);
    setIsReducedMotion(reduced);

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

    const width = container.clientWidth || 240;
    const height = container.clientHeight || 180;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 5.2);

    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Procedural Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.PointLight(0xd6b979, 3.2, 12);
    goldKeyLight.position.set(3, 4, 4);
    scene.add(goldKeyLight);

    const rimLight = new THREE.PointLight(0x3b3f9e, 2.0, 10);
    rimLight.position.set(-3, -3, -2);
    scene.add(rimLight);

    // Group to hold procedural geometry
    const objectGroup = new THREE.Group();
    scene.add(objectGroup);

    const disposables = [];

    // Geometry Generation based on card type
    if (type === "analytics") {
      // 1. STACKED BARS / HISTOGRAM LATTICE
      const barCount = 12;
      const heights = [1.2, 2.2, 1.6, 2.8, 1.9, 2.5, 1.4, 2.1, 1.7, 2.9, 2.3, 1.8];
      const barGeo = new THREE.BoxGeometry(0.24, 1, 0.24);
      disposables.push(barGeo);

      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xd6b979,
        metalness: 0.85,
        roughness: 0.2,
        emissive: 0x9c7f3f,
        emissiveIntensity: 0.15,
      });
      disposables.push(goldMat);

      const gridWidth = 4;
      const gridDepth = 3;

      for (let r = 0; r < gridDepth; r++) {
        for (let c = 0; c < gridWidth; c++) {
          const idx = r * gridWidth + c;
          const h = heights[idx % heights.length] * 0.75;
          const bar = new THREE.Mesh(barGeo, goldMat);
          bar.scale.set(1, h, 1);
          bar.position.set(
            (c - (gridWidth - 1) / 2) * 0.48,
            h / 2 - 0.9,
            (r - (gridDepth - 1) / 2) * 0.48
          );
          objectGroup.add(bar);
        }
      }

      // Base grid plate
      const plateGeo = new THREE.BoxGeometry(2.2, 0.04, 1.8);
      const plateMat = new THREE.MeshStandardMaterial({
        color: 0x12151c,
        metalness: 0.9,
        roughness: 0.3,
      });
      disposables.push(plateGeo, plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.y = -0.92;
      objectGroup.add(plate);

    } else if (type === "neural") {
      // 2. NODE-AND-EDGE NEURAL CLUSTER
      const nodeCount = 18;
      const positions = [];
      const nodeGeo = new THREE.SphereGeometry(0.1, 12, 12);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0xf0dda8,
        metalness: 0.9,
        roughness: 0.15,
        emissive: 0xd6b979,
        emissiveIntensity: 0.3,
      });
      disposables.push(nodeGeo, nodeMat);

      for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const r = 1.35 * (0.8 + Math.random() * 0.35);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        positions.push(new THREE.Vector3(x, y, z));

        const sphere = new THREE.Mesh(nodeGeo, nodeMat);
        sphere.position.set(x, y, z);
        objectGroup.add(sphere);
      }

      // Interconnecting Synapse Edges
      const linePositions = [];
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (positions[i].distanceTo(positions[j]) < 1.4) {
            linePositions.push(
              positions[i].x, positions[i].y, positions[i].z,
              positions[j].x, positions[j].y, positions[j].z
            );
          }
        }
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xd6b979,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(lineGeo, lineMat);
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      objectGroup.add(lines);

    } else {
      // 3. LAYERED PRISM / DEPLOYMENT CLOUD
      const outerGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
      const outerEdges = new THREE.EdgesGeometry(outerGeo);
      const outerLineMat = new THREE.LineBasicMaterial({ color: 0xd6b979, linewidth: 2 });
      disposables.push(outerGeo, outerEdges, outerLineMat);
      const outerBox = new THREE.LineSegments(outerEdges, outerLineMat);
      objectGroup.add(outerBox);

      const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
      const innerMat = new THREE.MeshStandardMaterial({
        color: 0x12151c,
        metalness: 0.85,
        roughness: 0.25,
        emissive: 0xd6b979,
        emissiveIntensity: 0.25,
      });
      disposables.push(innerGeo, innerMat);
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      objectGroup.add(innerMesh);

      const innerEdges = new THREE.EdgesGeometry(innerGeo);
      const innerLineMat = new THREE.LineBasicMaterial({ color: 0xf0dda8 });
      disposables.push(innerEdges, innerLineMat);
      const innerLine = new THREE.LineSegments(innerEdges, innerLineMat);
      objectGroup.add(innerLine);
    }

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      const rotSpeed = isHovered ? 0.6 : 0.25;

      objectGroup.rotation.y = elapsed * rotSpeed;
      objectGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.15;

      if (type === "systems") {
        objectGroup.rotation.z = Math.cos(elapsed * 0.3) * 0.1;
      }

      // Lift & Scale on hover
      const targetScale = isHovered ? 1.15 : 1.0;
      objectGroup.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      disposables.forEach((d) => d.dispose && d.dispose());
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [type, isHovered, is3dDisabled, isReducedMotion]);

  if (!webglSupported || isReducedMotion || is3dDisabled) {
    return (
      <div className={`webgl-fallback-poster w-full h-full flex items-center justify-center ${className}`} aria-hidden="true">
        {type === "analytics" && (
          <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-60" fill="none">
            <rect x="15" y="45" width="14" height="40" fill="#D6B979" opacity="0.6" rx="2" />
            <rect x="35" y="25" width="14" height="60" fill="#F0DDA8" opacity="0.8" rx="2" />
            <rect x="55" y="35" width="14" height="50" fill="#D6B979" opacity="0.7" rx="2" />
            <rect x="75" y="15" width="14" height="70" fill="#F3EFE6" rx="2" />
          </svg>
        )}
        {type === "neural" && (
          <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-60" fill="none">
            <circle cx="50" cy="50" r="12" fill="#D6B979" />
            <circle cx="25" cy="30" r="8" fill="#F0DDA8" />
            <circle cx="75" cy="30" r="8" fill="#F0DDA8" />
            <circle cx="25" cy="70" r="8" fill="#F0DDA8" />
            <circle cx="75" cy="70" r="8" fill="#F0DDA8" />
            <line x1="50" y1="50" x2="25" y2="30" stroke="#D6B979" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="75" y2="30" stroke="#D6B979" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="25" y2="70" stroke="#D6B979" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="75" y2="70" stroke="#D6B979" strokeWidth="1.5" />
          </svg>
        )}
        {type === "systems" && (
          <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-60" fill="none">
            <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" stroke="#D6B979" strokeWidth="2" />
            <line x1="50" y1="15" x2="50" y2="95" stroke="#F0DDA8" strokeWidth="1.5" />
            <line x1="15" y1="35" x2="85" y2="75" stroke="#D6B979" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="55" r="10" fill="#D6B979" opacity="0.6" />
          </svg>
        )}
      </div>
    );
  }

  return <div ref={mountRef} className={`webgl-canvas-container w-full h-full relative ${className}`} aria-hidden="true" />;
}

export default SkillCanvasObject;

