import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Clone Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/*Banner*/}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.id}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item) => (
              <MediumCard key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
