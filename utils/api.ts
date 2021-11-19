//http://ip-api.com
export const ipApiUserCountry = () => {
  return fetch(`http://ip-api.com/json`).then((res) => res.json());
};

//https://restcountries.com/
export const restCountriesListAll = () => {
  return fetch(`https://restcountries.com/v3.1/all`).then((res) => res.json());
};

//https://restcountries.com/
export const restCountriesByListOfCodes = (codes: string[]) => {
  return fetch(
    `https://restcountries.com/v3.1/alpha?codes=${codes.toString()}`
  ).then((res) => res.json());
};

//'https://freecurrencyapi.net
export const freeCurrencyAPICurrency = () => {
  return fetch(
    `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}`
  ).then((res) => res.json());
};

//'https://date.nager.at
export const dateNagerAtHolidays = (code: string) => {
  return fetch(`/nager/NextPublicHolidays/${code}`).then((res) => res.json());
};
