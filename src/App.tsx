import React, { useState, useEffect } from "react";

import { Cards, Chart } from "./components";
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

  useEffect(() => {
    (async () => {
      const response = await fetchData();
      setData(response);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
    </div>
  );
};

export default App;
