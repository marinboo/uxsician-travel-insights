import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "../../components/atoms/Head";
import Footer from "../../components/atoms/Footer";
import { useQuery } from "react-query";
import Card from "../../components/atoms/Card";
import ComingSoonCard from "../../components/organisms/ComingSoonCard";
import SearchCountryForm from "../../components/organisms/SearchCountryForm";
import {
  ipApiUserCountry,
  restCountriesByListOfCodes,
  freeCurrencyAPICurrency,
  dateNagerAtHolidays,
} from "../../utils/api";
import strings from "../../data/strings";

const Insights: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const homeCountryQuery = useQuery("homeCountryQuery", ipApiUserCountry);

  const hostCountryQuery = useQuery(
    "hostCountryQuery",
    () =>
      restCountriesByListOfCodes([code, homeCountryQuery.data?.countryCode]),
    {
      enabled: !!homeCountryQuery.data?.countryCode,
    }
  );

  const holidaysQuery = useQuery(
    "holidaysQuery",
    () => dateNagerAtHolidays(code as string),
    {
      enabled: !!code,
    }
  );

  // const currencyQuery = useQuery("currencyQuery", () =>
  //   freeCurrencyAPICurrency()
  // );

  return (
    <>
      <Head />

      <div className="h-screen flex flex-col justify-between">
        <main className="container mx-auto my-8 max-w-md md:max-w-3xl lg:max-w-6xl">
          <h1>{strings.global.title}</h1>
          <div className="max-w-xl my-6">
            <SearchCountryForm />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card
              title="Home Country Information"
              footer={
                <a href="https://www.google.com/search?q=costa+rica">
                  More about
                </a>
              }
            >
              <div>
                {hostCountryQuery.isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <p>
                      <strong>NAME: </strong>
                      {hostCountryQuery.data?.[1]?.name.official}
                    </p>
                    <p>
                      <strong>CAPITAL: </strong>
                      {hostCountryQuery.data?.[1]?.capital[0]}
                    </p>
                    <p>
                      <strong>AREA (km): </strong>
                      {hostCountryQuery.data?.[1]?.area.toLocaleString("es")}km
                    </p>
                    <p>
                      <strong>FLAG: </strong>
                      {hostCountryQuery.data?.[1]?.flag}
                    </p>
                  </>
                )}
              </div>
            </Card>

            <Card
              title="Host Country Information"
              footer={
                <a href="https://www.google.com/search?q=costa+rica">
                  More about
                </a>
              }
            >
              <div>
                {hostCountryQuery.isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <p>
                      <strong>NAME: </strong>
                      {hostCountryQuery.data?.[0]?.name.official}
                    </p>
                    <p>
                      <strong>CAPITAL: </strong>
                      {hostCountryQuery.data?.[0]?.capital[0]}
                    </p>
                    <p>
                      <strong>AREA (km): </strong>
                      {hostCountryQuery.data?.[0]?.area.toLocaleString("es")}km
                    </p>
                    <p>
                      <strong>FLAG: </strong>
                      {hostCountryQuery.data?.[0]?.flag}
                    </p>
                  </>
                )}
              </div>
            </Card>

            <ComingSoonCard title="Host Country Map" />
            <ComingSoonCard title="Currency" />
            <ComingSoonCard title="Translations" />
            <Card
              title="Next Holidays"
              footer={
                <a href="https://www.google.com/search?q=costa+rica">
                  More about
                </a>
              }
            >
              {!holidaysQuery.isError &&
                holidaysQuery?.data?.map((holiday) => (
                  <div className="flex flex-stretch" key={holiday.date}>
                    <p className="pr-4 flex-none text-red-400">
                      <small>{holiday.date}</small>
                    </p>
                    <p>
                      <small>{holiday.name}</small>
                    </p>
                  </div>
                ))}
            </Card>

            <ComingSoonCard title="Events" />
            <ComingSoonCard title="Weather" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Insights;
