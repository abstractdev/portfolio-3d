import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Avatar from "../src/components/Avatar/Avatar";
import { Canvas, ambientLight } from "@react-three/fiber";
import { Suspense } from "react";
import Sphere from "../src/components/Sphere/Sphere";
import { Environment, Float } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Canvas>
          <Suspense>
            <ambientLight />
            {/* <Environment preset="warehouse"> */}
              <Float rotationIntensity={2} floatIntensity={2} speed={2}>
              <Avatar position ={[0, 0, 0]}/>
                <Sphere
                  color="#ff00a0"
                  amount={50}
                  position={[0, 0, 0]}
                  text="About"
                />
                <Sphere
                  color="#005678"
                  amount={50}
                  position={[0, 0, 0]}
                  text="Portfolio"
                />
                <Sphere
                  color="#01012b"
                  amount={50}
                  text="Contact"
                  position={[0, -1, -1]}
                />
              </Float>
            {/* </Environment> */}
          </Suspense>
        </Canvas>
      </main>
      </>
  );
}
