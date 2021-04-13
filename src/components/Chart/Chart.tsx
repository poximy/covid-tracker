import React, { useState, useEffect } from "react";

import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

interface DailyModel {
  confirmed: number;
  recovered: number;
  deaths: number;
  date: number;
}

const Chart: React.FC = () => {
  const [dailyData, setDailyData] = useState<DailyModel[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchDailyData();
      setDailyData(data.reverse());
    })();
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: dailyData.map((data) =>
          new Date(data.date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Recovered",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
