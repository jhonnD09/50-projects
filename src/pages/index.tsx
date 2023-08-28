import Head from "next/head";
import Layout from "@/Components/Layout";
import ExpandingCard from "@/Components/cero-five/Expanding-Card";
import ProgressSteps from "@/Components/cero-five/ProgressSteps";
import HiddenSearchWidget from "@/Components/cero-five/HiddenSearchWidget";
import ScrollAnimation from "@/Components/cero-five/ScrollAnimation";
import Landing from "../Components/Landing.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Initial</title>
      </Head>

      <main>
        <Landing />
      </main>
    </>
  );
}
