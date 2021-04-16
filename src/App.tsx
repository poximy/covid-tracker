import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";

interface ResponseModel {
  confirmed: number;
  recovered: number;
  deaths: number;
  lastUpdate: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<ResponseModel>();
  const [countryChange, setCountryChange] = useState();

  const countryHandler = async (value: string) => {
    // TODO not done 1:10
    console.log(value);
  };

  useEffect(() => {
    (async () => {
      const response = await fetchData();
      setData(response);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker countryHandler={countryHandler} />
      <Chart />
    </div>
  );
};

export default App;
