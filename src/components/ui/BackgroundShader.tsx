"use client";

import { useEffect, useRef } from "react";

export default function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vsSource = `
      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      varying highp vec2 v_texCoord;
      void main(void) {
          gl_Position = aVertexPosition;
          v_texCoord = aTextureCoord;
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
          vec2 uv = v_texCoord;
          
          float gridWidth = 0.001;
          float gridSpacing = 0.05;
          float grid = step(1.0 - gridWidth, fract(uv.x / gridSpacing)) + step(1.0 - gridWidth, fract(uv.y / gridSpacing));
          
          vec2 p1 = vec2(0.5 + 0.3 * cos(u_time * 0.2), 0.5 + 0.3 * sin(u_time * 0.3));
          vec2 p2 = vec2(0.5 + 0.3 * sin(u_time * 0.4), 0.5 + 0.2 * cos(u_time * 0.5));
          
          float d1 = length(uv - p1);
          float d2 = length(uv - p2);
          
          float glow1 = 0.05 / (d1 + 0.5);
          float glow2 = 0.03 / (d2 + 0.4);
          
          vec3 baseColor = vec3(0.075, 0.075, 0.082); // #131315
          vec3 accentColor = vec3(0.506, 0.549, 0.973); // #818cf8
          
          vec3 finalColor = baseColor;
          finalColor += accentColor * glow1 * 0.15;
          finalColor += accentColor * glow2 * 0.1;
          finalColor += grid * 0.015;
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const loadShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertShader = loadShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = loadShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positions = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    ]);
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const vPos = gl.getAttribLocation(program, "aVertexPosition");
    gl.enableVertexAttribArray(vPos);
    gl.vertexAttribPointer(vPos, 2, gl.FLOAT, false, 0, 0);

    const texCoords = new Float32Array([
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0,
    ]);
    const texBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    const tCoord = gl.getAttribLocation(program, "aTextureCoord");
    gl.enableVertexAttribArray(tCoord);
    gl.vertexAttribPointer(tCoord, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");

    let animId: number;
    const render = (time: number) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!prefersReducedMotion.matches) {
      animId = requestAnimationFrame(render);
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, 0);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-2] w-full h-full pointer-events-none"
      />
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid-pattern opacity-40" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-violet/5 rounded-full blur-[140px] pointer-events-none z-[-1]" />
    </>
  );
}
