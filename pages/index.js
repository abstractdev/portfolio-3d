import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Avatar from "../src/components/Avatar/Avatar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Canvas>
          <Suspense>
            <Avatar />
          </Suspense>
        </Canvas>
      </main>
    </div>
  );
}
