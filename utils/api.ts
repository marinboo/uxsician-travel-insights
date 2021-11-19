export const ipApiUserCountry = () => {
  return fetch(`/ip/json`).then((res) => res.json());
};

export const restCountriesListAll = () => {
  return fetch(`/restcountries/all`).then((res) => res.json());
};

export const restCountriesByListOfCodes = (codes: string[]) => {
  return fetch(`/restcountries/alpha?codes=${codes.toString()}`).then((res) =>
    res.json()
  );
};

export const freeCurrencyAPICurrency = () => {
  return fetch(
    `/freecurrencyapi/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}`
  ).then((res) => res.json());
};

export const dateNagerAtHolidays = (code: string) => {
  return fetch(`/nager/NextPublicHolidays/${code}`).then((res) => res.json());
};
