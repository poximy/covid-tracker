import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";
import { countries } from "../../api";

import styles from "./CountryPicker.module.css";

interface Props {
  countryHandler: (value: string) => Promise<void>;
}

const CountryPicker: React.FC<Props> = ({ countryHandler }) => {
  const [fetchedCountries, setFetchedCountries] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const data = await countries();
      setFetchedCountries(data);
    })();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => countryHandler(e.target.value)}
      >
        <option value="global">United States</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
