import Head from "next/head";
import styles from "@/styles/Home.module.css";


import Header from "@/components/header.js";
import { HeroSection } from "@/components/heroSection";
import AirdropPopUp from "@/components/airdropPopUp";
import TrendingSection from "@/components/trendingSection";
//import TrendingSection from "../components/trendingSection.js";

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Home - Buynby</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <section className={styles.main}>
          <Header />
          <HeroSection />
          <AirdropPopUp />
        </section>
        <TrendingSection />
      </section>
    </section>
  );
}