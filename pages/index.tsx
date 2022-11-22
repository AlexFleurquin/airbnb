import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
