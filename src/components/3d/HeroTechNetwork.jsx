import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// 8 Core Technologies in the Connected Software Ecosystem
const TECH_NODES = [
  { name: "Python", key: "python", coords: [-1.4, 1.2, 0.4], colorLight: "#84B179", colorDark: "#A2CB8B", radius: 0.28 },
  { name: "React", key: "react", coords: [1.7, 1.3, 0.6], colorLight: "#7692FF", colorDark: "#7692FF", radius: 0.28 },
  { name: "JavaScript", key: "js", coords: [-1.5, -0.8, -0.3], colorLight: "#F96E2A", colorDark: "#F96E2A", radius: 0.26 },
  { name: "API", key: "api", coords: [-0.3, -1.8, 0.5], colorLight: "#78B3CE", colorDark: "#78B3CE", radius: 0.25 },
  { name: "Backend", key: "backend", coords: [1.9, -1.0, -0.3], colorLight: "#1B2CC1", colorDark: "#7692FF", radius: 0.30 },
  { name: "SQL", key: "sql", coords: [0.8, -2.0, -0.2], colorLight: "#84B179", colorDark: "#A2CB8B", radius: 0.27 },
  { name: "Machine Learning", key: "ml", coords: [-0.5, 2.3, -0.4], colorLight: "#1B2CC1", colorDark: "#7692FF", radius: 0.32 },
  { name: "AI", key: "ai", coords: [1.3, 2.4, 0.3], colorLight: "#F96E2A", colorDark: "#F96E2A", radius: 0.30 },
];

// Logical Software Ecosystem Connections
const CONNECTIONS = [
  ["python", "ml"],
  ["ml", "ai"],
  ["python", "backend"],
  ["backend", "api"],
  ["backend", "sql"],
  ["react", "js"],
  ["react", "api"],
  ["js", "api"],
  ["python", "sql"],
  ["python", "js"],
  ["ml", "backend"],
  ["ai", "react"],
];

export function HeroTechNetwork({ isDark = false, onPerformanceDrop }) {
  const mountRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [screenCoords, setScreenCoords] = useState({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0.4, 9.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));
    container.appendChild(renderer.domElement);

    // Group holding the entire network
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    const updateNetworkPosition = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        // Desktop: Position over the right column framing the portrait
        networkGroup.position.set(2.85, 0.1, 0);
        networkGroup.scale.set(1.0, 1.0, 1.0);
      } else if (w >= 768) {
        // Tablet: Shift slightly below text
        networkGroup.position.set(0, -1.2, 0);
        networkGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        // Mobile: Scale down and position around bottom portrait
        networkGroup.position.set(0, -1.6, 0);
        networkGroup.scale.set(0.72, 0.72, 0.72);
      }
    };
    updateNetworkPosition();

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.2 : 1.6);
    dirLight.position.set(4, 6, 6);
    scene.add(dirLight);

    // 3. Materials & Meshes
    const nodeMeshes = [];
    const nodeMap = {};

    TECH_NODES.forEach((node) => {
      const colorHex = isDark ? node.colorDark : node.colorLight;
      const sphereGeo = new THREE.SphereGeometry(node.radius, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(colorHex),
        roughness: 0.25,
        metalness: 0.35,
      });

      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      mesh.position.set(...node.coords);
      mesh.userData = { nodeKey: node.key, nodeName: node.name, originalScale: 1.0 };
      networkGroup.add(mesh);

      nodeMeshes.push(mesh);
      nodeMap[node.key] = mesh;
    });

    // 4. Connecting Hairline Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(isDark ? "#7692FF" : "#1B2CC1"),
      transparent: true,
      opacity: isDark ? 0.28 : 0.22,
    });

    const linePositions = [];
    CONNECTIONS.forEach(([srcKey, dstKey]) => {
      const src = nodeMap[srcKey];
      const dst = nodeMap[dstKey];
      if (src && dst) {
        linePositions.push(src.position.x, src.position.y, src.position.z);
        linePositions.push(dst.position.x, dst.position.y, dst.position.z);
      }
    });

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    networkGroup.add(linesMesh);

    // 5. Small Data Pulse Particles (24 floating satellite nodes)
    const particleCount = isMobile ? 12 : 24;
    const particleGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const particleMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(isDark ? "#ABD2FA" : "#7692FF"),
      transparent: true,
      opacity: isDark ? 0.6 : 0.45,
    });

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const pMesh = new THREE.Mesh(particleGeo, particleMat);
      const conn = CONNECTIONS[i % CONNECTIONS.length];
      pMesh.userData = {
        src: nodeMap[conn[0]],
        dst: nodeMap[conn[1]],
        progress: Math.random(),
        speed: 0.15 + Math.random() * 0.2,
      };
      networkGroup.add(pMesh);
      particles.push(pMesh);
    }

    // 6. Interactive Raycaster & Mouse Parallax
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = x;
      mouse.y = y;

      targetRotationY = x * 0.12;
      targetRotationX = -y * 0.10;
    };

    if (!isMobile) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateNetworkPosition();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // 8. Visibility & Scroll Optimization
    let isVisible = true;
    let scrollY = window.scrollY || 0;
    let targetOpacity = 1.0;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
      const windowH = window.innerHeight;
      if (scrollY < windowH) {
        targetOpacity = 1.0 - (scrollY / windowH) * 0.8;
      } else {
        targetOpacity = 0;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 9. Animation Loop
    let animationFrameId;
    const startTime = performance.now();
    let lastTime = performance.now();
    let lowFpsDuration = 0;

    // Project 3D node coordinates to 2D screen percentage for HTML labels
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || targetOpacity <= 0.02) return;

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Monitor FPS
      if (delta > 0) {
        const fps = 1 / delta;
        if (fps < 34) {
          lowFpsDuration += delta;
          if (lowFpsDuration > 2.5 && onPerformanceDrop) {
            onPerformanceDrop();
          }
        } else {
          lowFpsDuration = Math.max(0, lowFpsDuration - delta * 0.5);
        }
      }

      const elapsed = (now - startTime) * 0.001;

      // Gentle orbital movement
      networkGroup.rotation.y += (targetRotationY + Math.sin(elapsed * 0.3) * 0.04 - networkGroup.rotation.y) * 0.05;
      networkGroup.rotation.x += (targetRotationX + Math.cos(elapsed * 0.25) * 0.03 - networkGroup.rotation.x) * 0.05;

      // Move data particles along connection paths
      particles.forEach((p) => {
        p.userData.progress = (p.userData.progress + delta * p.userData.speed) % 1.0;
        if (p.userData.src && p.userData.dst) {
          p.position.lerpVectors(
            p.userData.src.position,
            p.userData.dst.position,
            p.userData.progress
          );
        }
      });

      // Raycasting for interactive node hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        hit.scale.lerp(new THREE.Vector3(1.25, 1.25, 1.25), 0.15);
        setHoveredNode(hit.userData.nodeKey);
      } else {
        setHoveredNode(null);
      }

      nodeMeshes.forEach((mesh) => {
        if (!intersects.some((i) => i.object === mesh)) {
          mesh.scale.lerp(new THREE.Vector3(1.0, 1.0, 1.0), 0.1);
        }
      });

      // Update Screen Coordinates for small technology labels
      const newScreenCoords = {};
      const width = container.clientWidth;
      const height = container.clientHeight;

      TECH_NODES.forEach((node) => {
        const m = nodeMap[node.key];
        if (m) {
          m.getWorldPosition(tempVec);
          tempVec.project(camera);
          const x = (tempVec.x * 0.5 + 0.5) * width;
          const y = (-(tempVec.y * 0.5) + 0.5) * height;
          newScreenCoords[node.key] = { x, y, visible: tempVec.z < 1 };
        }
      });
      setScreenCoords(newScreenCoords);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);

      nodeMeshes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      lineGeometry.dispose();
      lineMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isDark, onPerformanceDrop]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden select-none"
      style={{ zIndex: 1 }}
    >
      {/* Small Technology Labels floating beside 3D nodes */}
      {TECH_NODES.map((node) => {
        const pos = screenCoords[node.key];
        if (!pos || !pos.visible) return null;
        const isHovered = hoveredNode === node.key;

        return (
          <div
            key={node.key}
            className="hidden sm:block absolute pointer-events-none transition-transform duration-100 -translate-x-1/2 -translate-y-8"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
            }}
          >
            <div
              className={`px-2 py-0.5 rounded text-[11px] font-mono tracking-wide border whitespace-nowrap transition-all duration-200 ${
                isHovered
                  ? "bg-[var(--primary-accent)] text-[var(--accent-contrast)] border-[var(--primary-accent)] scale-110 shadow-sm font-semibold"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] shadow-xs"
              }`}
            >
              {node.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroTechNetwork;

