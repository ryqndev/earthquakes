import { useEffect, useState } from "react";

const getServerEndpoint = (startTime: string, endTime: string) =>
  `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}`;

export const useUSGSEarthquakeData = (startTime?: Date, endTime?: Date) => {
  const [data, setData] = useState(null);

  useEffect(() => {}, [startTime, endTime]);
};
