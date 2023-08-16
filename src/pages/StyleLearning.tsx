import Layout from "@/Components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function StyleLearning() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Styles Learning</title>
      </Head>
      <main  >
        <Layout>
          <h2>This is the of Styles LinkedIn</h2>
          <button onClick={() => router.push("/test")}>Ir a las pruebas</button>
        </Layout>
      </main>
    </>
  );
}
