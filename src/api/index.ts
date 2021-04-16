import axios from "axios";

const url = "https://covid19.mathdro.id/api";

interface ResponseModel {
  confirmed: number;
  recovered: number;
  deaths: number;
  lastUpdate: string;
}

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedData: ResponseModel = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

const dailyUrl = "https://api.covidtracking.com/v1/us/daily.json";

interface DailyModel {
  confirmed: number;
  recovered: number;
  deaths: number;
  date: string | null;
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(dailyUrl);
    if (data) {
      const modifiedData: DailyModel[] = [];
      for (let i = 0; i < data.length; i++) {
        const values = data[i];
        const modifiedValues: DailyModel = {
          confirmed: values.positive,
          recovered: values.recovered,
          deaths: values.death,
          date: values.dateChecked,
        };
        modifiedData.push(modifiedValues);
      }
      return modifiedData;
    }
  } catch (error) {
    return error;
  }
};

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    let modifiedData: string[] = [];
    for (let i = 0; i < countries.length; i++) {
      const country: string = countries[i].name;
      modifiedData.push(country);
    }

    return modifiedData;
  } catch (error) {
    return error;
  }
};
