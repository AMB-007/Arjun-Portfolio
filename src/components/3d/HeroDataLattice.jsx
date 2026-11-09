import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroDataLattice({ isDark = true, palette = "navy", onPerformanceDrop }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect device capabilities
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 90 : 230;
    const connectionDistance = isMobile ? 2.6 : 3.0;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      60
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    // Dynamic Fog for real volumetric depth
    const parseColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const bgHex = styles.getPropertyValue("--bg").trim() || (isDark ? "#0A1020" : "#F7F4EC");
      const accentHex = styles.getPropertyValue("--accent").trim() || (isDark ? "#C9A66B" : "#8A6A2F");
      const dataAccentHex = styles.getPropertyValue("--data-accent").trim() || (isDark ? "#8FA8D8" : "#2F4B86");
      const amberHex = styles.getPropertyValue("--highlight-amber").trim() || (isDark ? "#C9A66B" : "#8A6A2F");

      return {
        bg: new THREE.Color(bgHex),
        accent: new THREE.Color(accentHex),
        dataAccent: new THREE.Color(dataAccentHex),
        amber: new THREE.Color(amberHex),
      };
    };

    let themeColors = parseColors();
    scene.fog = new THREE.Fog(themeColors.bg, 6, 20);

    // 2. Procedural Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.85 : 1.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.2 : 1.7);
    keyLight.position.set(5, 7, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.0 : 1.2);
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(themeColors.accent, isDark ? 3.0 : 1.8, 14);
    accentLight.position.set(2.5, 1.5, 4);
    scene.add(accentLight);

    // 3. Generate Volumetric Lattice Nodes
    const positions = [];
    const basePositions = [];
    const nodeColors = [];
    const nodeScales = [];
    const nodeTypes = []; // 0: accent, 1: dataAccent, 2: glint

    const currentAccent = themeColors.accent.clone();
    const currentDataAccent = themeColors.dataAccent.clone();
    const currentAmber = themeColors.amber.clone();

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 3.4;

      // Volumetric elliptical cluster biased toward right viewport
      const x = r * Math.sin(phi) * Math.cos(theta) * 1.4;
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.15;
      const z = r * Math.cos(phi) * 1.0;

      positions.push(new THREE.Vector3(x, y, z));
      basePositions.push(new THREE.Vector3(x, y, z));

      // Type & Color assignment
      const rand = Math.random();
      let type = 0;
      let col = currentAccent;
      let scale = 1.0;

      if (rand < 0.15) {
        type = 2; // Glint focal node
        col = currentAmber;
        scale = 1.5; // Larger hero nodes
      } else if (rand < 0.5) {
        type = 1; // Secondary data node
        col = currentDataAccent;
        scale = 0.9;
      } else {
        type = 0; // Primary accent node
        col = currentAccent;
        scale = 1.15;
      }

      nodeTypes.push(type);
      nodeColors.push(col.clone());
      nodeScales.push(scale);
    }

    // 4. Instanced Mesh for Nodes (Physical Glass/Metal with clearcoat)
    const baseRadius = isMobile ? 0.055 : 0.075;
    const nodeGeometry = new THREE.SphereGeometry(baseRadius, 18, 18);
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
      roughness: 0.18,
      metalness: 0.8,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      transparent: true,
      opacity: isDark ? 0.96 : 0.88,
    });

    const instancedNodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(nodeScales[i]);
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);
      instancedNodes.setColorAt(i, nodeColors[i]);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    if (instancedNodes.instanceColor) instancedNodes.instanceColor.needsUpdate = true;

    // 5. Connect Nearest Neighbors with Distinct 3D Lines
    const lineIndices = [];
    const linePairs = [];

    for (let i = 0; i < nodeCount; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = positions[i].distanceTo(positions[j]);
        if (dist < connectionDistance && connections < 4) {
          linePairs.push(positions[i].x, positions[i].y, positions[i].z);
          linePairs.push(positions[j].x, positions[j].y, positions[j].z);
          lineIndices.push(i, j);
          connections++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePairs, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: currentAccent,
      transparent: true,
      opacity: isDark ? 0.34 : 0.26,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);

    // Root Group
    const latticeGroup = new THREE.Group();
    latticeGroup.add(instancedNodes);
    latticeGroup.add(lineSegments);
    scene.add(latticeGroup);

    // Initial position: placed prominently behind and beside the portrait
    latticeGroup.position.set(isMobile ? 0 : 2.2, 0, -0.5);

    // 6. Interactive Damped Pointer Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      // Damped 6 degree maximum parallax
      targetRotationY = mouseX * 0.105;
      targetRotationX = -mouseY * 0.105;
    };

    if (!isMobile) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    // 7. Scroll Choreography
    let scrollY = window.scrollY || 0;
    let targetGroupX = isMobile ? 0 : 2.2;
    let targetGroupY = 0;
    let targetOpacity = 1.0;

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
      const windowHeight = window.innerHeight;

      if (scrollY < windowHeight) {
        // Hero zone: full visibility with slow tilt
        const progress = scrollY / windowHeight;
        targetGroupX = (isMobile ? 0 : 2.2) + progress * 1.0;
        targetGroupY = -progress * 0.7;
        targetOpacity = 1.0 - progress * 0.5;
      } else if (scrollY < windowHeight * 2.2) {
        // About/Skills zone: calm backdrop on right edge
        const progress = (scrollY - windowHeight) / (windowHeight * 1.2);
        targetGroupX = (isMobile ? 0.3 : 3.0);
        targetGroupY = -0.7 - progress * 0.5;
        targetOpacity = 0.5 * (1.0 - progress);
      } else {
        // Complete fade-out before Projects section
        targetOpacity = 0;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 8. Performance Monitoring (Auto-disable if fps < 38 for 2 consecutive seconds)
    let lowFpsDuration = 0;
    let lastTime = performance.now();
    const startTime = performance.now();
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // 9. Render & Animation Loop with Smooth Color Lerp
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || targetOpacity <= 0.01) {
        return;
      }

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Monitor FPS
      if (delta > 0) {
        const currentFps = 1 / delta;
        if (currentFps < 38) {
          lowFpsDuration += delta;
          if (lowFpsDuration > 2.0 && onPerformanceDrop) {
            onPerformanceDrop();
          }
        } else {
          lowFpsDuration = Math.max(0, lowFpsDuration - delta * 0.5);
        }
      }

      const elapsedTime = (now - startTime) * 0.001;

      // Smooth color lerp to latest CSS theme tokens
      const latestColors = parseColors();
      currentAccent.lerp(latestColors.accent, 0.08);
      currentDataAccent.lerp(latestColors.dataAccent, 0.08);
      currentAmber.lerp(latestColors.amber, 0.08);
      accentLight.color.copy(currentAccent);
      scene.fog.color.copy(latestColors.bg);

      lineMaterial.color.copy(currentAccent);
      lineMaterial.opacity = (isDark ? 0.34 : 0.26) * targetOpacity;
      nodeMaterial.opacity = (isDark ? 0.96 : 0.88) * targetOpacity;

      // Damped Parallax & Slow Idle Rotation
      latticeGroup.rotation.y += (targetRotationY + elapsedTime * 0.04 - latticeGroup.rotation.y) * 0.04;
      latticeGroup.rotation.x += (targetRotationX + Math.sin(elapsedTime * 0.15) * 0.02 - latticeGroup.rotation.x) * 0.04;

      // Smooth Scroll Glide
      latticeGroup.position.x += (targetGroupX - latticeGroup.position.x) * 0.06;
      latticeGroup.position.y += (targetGroupY - latticeGroup.position.y) * 0.06;

      // Coherent Network Breathing Pulse
      const positionsAttr = lineGeometry.attributes.position;
      const posArray = positionsAttr.array;

      for (let i = 0; i < nodeCount; i++) {
        const base = basePositions[i];
        const dist = Math.sqrt(base.x * base.x + base.y * base.y + base.z * base.z);
        const pulse = 1.0 + Math.sin(elapsedTime * 1.2 + dist * 1.4) * 0.06;

        dummy.position.set(base.x * pulse, base.y * pulse, base.z * pulse);
        dummy.scale.setScalar(nodeScales[i] * (1.0 + Math.sin(elapsedTime * 2.0 + i) * 0.05));
        dummy.updateMatrix();
        instancedNodes.setMatrixAt(i, dummy.matrix);

        // Update color
        const type = nodeTypes[i];
        const col = type === 2 ? currentAmber : type === 1 ? currentDataAccent : currentAccent;
        instancedNodes.setColorAt(i, col);
      }
      instancedNodes.instanceMatrix.needsUpdate = true;
      if (instancedNodes.instanceColor) instancedNodes.instanceColor.needsUpdate = true;

      // Update line positions matching pulsed nodes
      let pairIdx = 0;
      for (let k = 0; k < lineIndices.length; k += 2) {
        const iA = lineIndices[k];
        const iB = lineIndices[k + 1];

        const baseA = basePositions[iA];
        const distA = Math.sqrt(baseA.x * baseA.x + baseA.y * baseA.y + baseA.z * baseA.z);
        const pulseA = 1.0 + Math.sin(elapsedTime * 1.2 + distA * 1.4) * 0.06;

        const baseB = basePositions[iB];
        const distB = Math.sqrt(baseB.x * baseB.x + baseB.y * baseB.y + baseB.z * baseB.z);
        const pulseB = 1.0 + Math.sin(elapsedTime * 1.2 + distB * 1.4) * 0.06;

        posArray[pairIdx++] = baseA.x * pulseA;
        posArray[pairIdx++] = baseA.y * pulseA;
        posArray[pairIdx++] = baseA.z * pulseA;

        posArray[pairIdx++] = baseB.x * pulseB;
        posArray[pairIdx++] = baseB.y * pulseB;
        posArray[pairIdx++] = baseB.z * pulseB;
      }
      positionsAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 11. Cleanup on Unmount
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
  }, [isDark, palette, onPerformanceDrop]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

export default HeroDataLattice;
