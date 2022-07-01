import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, draco } from "@react-three/drei";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="about-bg" />
      <h3>We are Portals Xperience (PortalsX)</h3>
    </>
  );
}
