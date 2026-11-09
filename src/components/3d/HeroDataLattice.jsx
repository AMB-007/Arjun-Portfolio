import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroDataLattice({ isDark = true, accent = "sapphire", onPerformanceDrop }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect device capabilities
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 80 : 220;
    const connectionDistance = isMobile ? 2.2 : 2.5;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Procedural studio setup)
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.0 : 1.6);
    keyLight.position.set(5, 6, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.8 : 1.0);
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    // 3. Generate Cluster Nodes
    const positions = [];
    const basePositions = [];
    const nodeColors = [];
    const isAmberNode = [];

    // Parse theme colors from CSS variables
    const getThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const accentHex = styles.getPropertyValue("--accent").trim() || (isDark ? "#5B7CFA" : "#2B4BDB");
      const amberHex = styles.getPropertyValue("--highlight-amber").trim() || (isDark ? "#E8B04B" : "#D99A1E");
      return {
        accent: new THREE.Color(accentHex),
        amber: new THREE.Color(amberHex),
      };
    };

    let { accent: targetAccent, amber: targetAmber } = getThemeColors();
    const currentAccentColor = targetAccent.clone();
    const currentAmberColor = targetAmber.clone();

    // Volumetric organic ellipsoid cluster
    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 3.2;

      // Position clustered towards right side of hero viewport
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.35;
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.05;
      const z = r * Math.cos(phi) * 0.9;

      positions.push(new THREE.Vector3(x, y, z));
      basePositions.push(new THREE.Vector3(x, y, z));

      // ~12% nodes have amber highlight glints
      const isAmber = Math.random() < 0.14;
      isAmberNode.push(isAmber);
      const col = isAmber ? currentAmberColor.clone() : currentAccentColor.clone();
      nodeColors.push(col);
    }

    // 4. Instanced Mesh for Nodes (Glass-Metal Physical Material)
    const nodeGeometry = new THREE.SphereGeometry(isMobile ? 0.045 : 0.055, 16, 16);
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
      transparent: true,
      opacity: isDark ? 0.95 : 0.85,
    });

    const instancedNodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);
      instancedNodes.setColorAt(i, nodeColors[i]);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    if (instancedNodes.instanceColor) instancedNodes.instanceColor.needsUpdate = true;

    // 5. Connect Nearest Neighbors with Lines
    const linePairs = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < connectionDistance) {
          linePairs.push(positions[i].x, positions[i].y, positions[i].z);
          linePairs.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePairs, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: currentAccentColor,
      transparent: true,
      opacity: isDark ? 0.18 : 0.14,
      blending: THREE.AdditiveBlending,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);

    // Root Group
    const latticeGroup = new THREE.Group();
    latticeGroup.add(instancedNodes);
    latticeGroup.add(lineSegments);
    scene.add(latticeGroup);

    // Initial position: Floating behind right side of Hero
    latticeGroup.position.set(isMobile ? 0 : 2.0, 0, 0);

    // 6. Interactive Damped Pointer Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      // Max 6 degrees (0.1 rad)
      targetRotationY = mouseX * 0.1;
      targetRotationX = -mouseY * 0.1;
    };

    if (!isMobile) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    // 7. Scroll Choreography
    let scrollY = window.scrollY || 0;
    let targetGroupX = isMobile ? 0 : 2.0;
    let targetGroupY = 0;
    let targetOpacity = 1.0;

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
      const windowHeight = window.innerHeight;

      // Hero zone (0 -> 1.0 viewport height)
      if (scrollY < windowHeight) {
        const progress = scrollY / windowHeight;
        targetGroupX = (isMobile ? 0 : 2.0) + progress * 1.2;
        targetGroupY = -progress * 0.8;
        targetOpacity = 1.0 - progress * 0.55; // Fade partially beside About
      } else if (scrollY < windowHeight * 2.2) {
        // About zone (glide to side, subtle ambient presence)
        const progress = (scrollY - windowHeight) / (windowHeight * 1.2);
        targetGroupX = (isMobile ? 0.5 : 3.2);
        targetGroupY = -0.8 - progress * 0.6;
        targetOpacity = 0.45 * (1.0 - progress);
      } else {
        // Fade out completely before Demo section
        targetOpacity = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 8. Performance Monitoring (Auto-disable if fps < 40 for > 2 seconds)
    let frameTimes = [];
    let lowFpsDuration = 0;
    let lastTime = performance.now();
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // 9. Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || targetOpacity <= 0.01) {
        // Paused or invisible: Skip heavy draw call
        return;
      }

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // FPS tracking
      if (delta > 0) {
        const currentFps = 1 / delta;
        if (currentFps < 38) {
          lowFpsDuration += delta;
          if (lowFpsDuration > 2.0) {
            if (onPerformanceDrop) onPerformanceDrop();
          }
        } else {
          lowFpsDuration = Math.max(0, lowFpsDuration - delta);
        }
      }

      const elapsedTime = clock.getElapsedTime();

      // Dynamic color lerping towards current theme tokens
      const latestColors = getThemeColors();
      currentAccentColor.lerp(latestColors.accent, 0.08);
      currentAmberColor.lerp(latestColors.amber, 0.08);

      lineMaterial.color.copy(currentAccentColor);

      // Idle Slow Rotation + Pointer Parallax
      latticeGroup.rotation.y += 0.0018;
      latticeGroup.rotation.x += (targetRotationX - latticeGroup.rotation.x) * 0.04;
      latticeGroup.rotation.z += (targetRotationY * 0.5 - latticeGroup.rotation.z) * 0.04;

      // Smooth scroll choreography glide
      latticeGroup.position.x += (targetGroupX - latticeGroup.position.x) * 0.05;
      latticeGroup.position.y += (targetGroupY - latticeGroup.position.y) * 0.05;

      // Group opacity lerp
      nodeMaterial.opacity = (isDark ? 0.95 : 0.85) * targetOpacity;
      lineMaterial.opacity = (isDark ? 0.18 : 0.14) * targetOpacity;

      // Subtle Breathing Pulse across nodes
      const pulseSpeed = 1.3;
      for (let i = 0; i < nodeCount; i++) {
        const base = basePositions[i];
        const dist = base.length();
        const pulse = 1.0 + Math.sin(elapsedTime * pulseSpeed + dist * 1.5) * 0.06;

        dummy.position.set(base.x * pulse, base.y * pulse, base.z * pulse);
        dummy.updateMatrix();
        instancedNodes.setMatrixAt(i, dummy.matrix);

        // Instance Color update
        const nodeCol = isAmberNode[i] ? currentAmberColor : currentAccentColor;
        instancedNodes.setColorAt(i, nodeCol);
      }
      instancedNodes.instanceMatrix.needsUpdate = true;
      if (instancedNodes.instanceColor) instancedNodes.instanceColor.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Responsive Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 11. Full Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);

      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isDark, accent, onPerformanceDrop]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

export default HeroDataLattice;
