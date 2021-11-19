import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import Footer from "../components/molecules/Footer";
import Head from "../components/molecules/Head";
import { restCountriesListAll } from "../utils/api";

const Home: NextPage = () => {
  const router = useRouter();
  const [fieldValue, setFieldValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState(null);
  const [countryFilteredList, setCountryFilteredList] = useState([]);

  const countryListQuery = useQuery("countryListQuery", restCountriesListAll);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!country) {
      setError("You must type or select a valid Country name.");
    } else {
      router.push(`/insights/${country.cca2}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(value);
    setError(null);
    setCountry(
      countryListQuery.data?.find((country) => {
        return (
          country.name.common.toLowerCase().valueOf() ==
          value.toLowerCase().valueOf()
        );
      })
    );
    const filteredList = countryListQuery.data?.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setCountryFilteredList(value != "" ? filteredList : []);
  };

  const handleSelect = (country) => {
    setCountry(country);
    setCountryFilteredList([]);
    setFieldValue(country.name.common);
  };

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
          <h1 className="m-4">Uxsician Travel Insights</h1>
          <p>
            Search for a country and we will find some travel insights about it
            for you.
          </p>
          <form className="flex w-full max-w-xl mx-auto space-x-3 m-6 items-start">
            <div className="w-full">
              <input
                onChange={handleChange}
                value={fieldValue}
                placeholder="Type or select a Country Name"
              />
              {error && (
                <div>
                  <p className="text-red-600 text-left">
                    <small>* {error}</small>
                  </p>
                </div>
              )}
              {countryFilteredList.length !== 0 && (
                <div className="text-left border p-1 shadow-md rounded-lg">
                  {countryFilteredList.map((country, index) => (
                    <p
                      className="option"
                      key={index}
                      onClick={() => handleSelect(country)}
                    >
                      {country.name.common}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <button onClick={handleClick}>Search</button>
          </form>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
