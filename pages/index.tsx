import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/atoms/Head";

import Footer from "../components/atoms/Footer";
import SearchCountryForm from "../components/organisms/SearchCountryForm";
import strings from "../data/strings";

const Home: NextPage = () => {
  return (
    <>
      <Head />

      <div className="h-screen flex flex-col justify-between">
        <main className="container max-w-xl mx-auto text-center mt-8">
          <Image
            src="/world_map.svg"
            alt="World Map"
            width={720}
            height={450}
          />
          <h1 className="m-4">{strings.global.title}</h1>
          <p>{strings.global.description}</p>
          <div className="max-w-xl mx-auto m-6">
            <SearchCountryForm />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
