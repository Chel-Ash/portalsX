import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, draco } from "@react-three/drei";
import { motion, spring, useMotionValue, useSpring } from "framer-motion";

function openImageLink() {
  window.location = "./";
}

function animatePortal() {}

export default function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 650 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="bg">
        <motion.img
          src={require("../assets/img/cursor1-rbg.png")}
          className="cursor"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            rotate: -30
          }}
        />
        <motion.h1
        // animate={{
        //   // scale: [1, 1.2]
        // }}
        // transition={{ duration: 2, repeat: Infinity }}
        >
          Portals
          <br />
          <span>Xperience</span>
        </motion.h1>
      </div>
      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={4}
          maxPolarAngle={-Math.PI / 20}
          minPolarAngle={-Math.PI / 20}
        />
        <mesh camera={[0, 0, 10]} className="portal">
          <sphereGeometry args={[5.5, 28]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh></mesh>
      </Canvas>
      <button className="switch">STATIC</button>
      <div className="layer" />
      <img
        src={require("./portals_icon2.png")}
        alt="portalsXicon"
        className="img1"
        onClick={openImageLink}
      />
      <link className="top-left" href="./portals_icon2.png" />
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="./Team.js"
        className="top-1"
        children="Games"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="./Films.js"
        className="top-2"
        children="Films"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="./Games.js"
        className="top-3"
        children="Team"
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        onClick={animatePortal}
        href="./about.js"
        className="top-right"
        children="About"
      />

      <a href="/" className="follow-us" children="Follow Us:" />
      <motion.img
        whileHover={{ translateY: -15 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        src={require("../assets/img/Twitter.png")}
        alt="portalsXicon"
        className="img2"
        onClick={openImageLink}
      />
      <motion.img
        whileHover={{ translateY: -10 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        src={require("../assets/img/Discord.png")}
        alt="portalsXicon"
        className="img3"
        onClick={openImageLink}
      />
      <motion.img
        whileHover={{ translateY: -10 }}
        transition={{ type: "spring", damping: 10, stiffness: 400 }}
        src={require("../assets/img/Medium.png")}
        alt="portalsXicon"
        className="img4"
        onClick={openImageLink}
      />
    </>
  );
}
