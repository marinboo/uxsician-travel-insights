import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useQuery } from "react-query";
import FilterField from "../atoms/FilterField";
import { restCountriesListAll } from "../../utils/api";
import strings from "../../data/strings";

const SearchCountryForm = () => {
  const router = useRouter();
  const [fieldValue, setFieldValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState(null);
  const [countryFilteredList, setCountryFilteredList] = useState([]);

  const countryListQuery = useQuery("countryListQuery", restCountriesListAll);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!country) {
      setError(strings.components.organisms.SearchCountryForm.error);
    } else {
      router.push("/insights/[code]", `/insights/${country.cca2}`);
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

  const handleBlur = () => {
    setCountryFilteredList([]);
  };
  return (
    <form className="flex w-full space-x-3 items-start">
      <div className="w-full">
        <FilterField
          value={fieldValue}
          placeholder={
            strings.components.organisms.SearchCountryForm.placeholder
          }
          onChange={handleChange}
          onBlur={handleBlur}
          error={error}
          data={countryFilteredList}
          optionClick={handleSelect}
        />
      </div>
      <button onClick={handleClick}>Search</button>
    </form>
  );
};

export default SearchCountryForm;
