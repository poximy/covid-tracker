import axios from "axios";

const url = "https://covid19.mathdro.id/api";

interface ResponseModel {
  confirmed: number;
  recovered: number;
  deaths: number;
  lastUpdate: string;
}

const fetchData = async () => {
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

export default fetchData;
