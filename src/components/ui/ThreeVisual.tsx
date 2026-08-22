"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Outer icosahedron
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1, // Electric violet
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Inner icosahedron
    const innerGeometry = new THREE.IcosahedronGeometry(1, 1);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0x818cf8, // Primary container accent
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      mesh.rotation.y += 0.005;
      mesh.rotation.x += 0.002;
      innerMesh.rotation.y -= 0.003;

      group.position.y = Math.sin(Date.now() * 0.001) * 0.12;

      renderer.render(scene, camera);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!prefersReducedMotion.matches) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (prefersReducedMotion.matches) {
        renderer.render(scene, camera);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px] relative flex items-center justify-center pointer-events-none"
    />
  );
}
