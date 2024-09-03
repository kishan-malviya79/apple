"use client";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import MacContainer from "./MacContainer";

export default function Home() {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar line flex gap-10 py-10 absolute top-0  text-white left-1/2 -translate-x-1/2">
        {[
          "iphone",
          "ipad",
          "services",
          "ios",
          "mac",
          "iPhone",
          "services",
          "ios",
          "mac",
          "iPhone",
          "iWatch",
        ].map((e) => (
          <a href="" className="text-white capitalize font-medium text-sm">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center top-32 left-1/2 text-white -translate-x-1/2 ">
        <h3 className="masked  text-7xl font-bold ">macbook pro. </h3>
        <h5> Oh so pro ! </h5>
        <p className="text-center w-3/4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          officiis accusamus expedita id facere.
        </p>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
