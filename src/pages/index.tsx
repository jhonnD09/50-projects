import Head from "next/head";
import Link from "next/link";
import style from "../styles/index.module.css";
import { useEffect, useState } from "react";
import image from "../../assets/landing.png";
import Image from "next/image";
import Layout from "@/Components/Layout";
import ExpandingCard from "@/Components/cero-five/Expanding-Card";
import ProgressSteps from "@/Components/cero-five/ProgressSteps";
import HiddenSearchWidget from "@/Components/cero-five/HiddenSearchWidget";
import ScrollAnimation from "@/Components/cero-five/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Head>
        <title>50 Projects</title>
      </Head>

      <main>
        <Layout>
          <div className="w-full bg-black h-[300px] flex items-center justify-center rounded-[30px]">
            <h1 className=" text-white text-7xl text-center">
              50 Projects witch HTML - CSS - JS - TS
            </h1>
          </div>

          <h1 className=" text-5xl ml-5 mt-12 ">Project One</h1>

          <ExpandingCard />

          <h1 className=" text-5xl ml-5 mt-12 ">Project Two</h1>
          <ProgressSteps />
          <h1 className=" text-5xl ml-5 mt-12 ">Project Three</h1>
        </Layout>
        <HiddenSearchWidget />
        <ScrollAnimation />
      </main>
    </>
  );
}
