import { useEffect, useState } from "react";
import sampleUSGSFeatureCollectionData from "./sampleFeatureCollection.json";

export type FEATURE_COLLECTION_TYPE = typeof sampleUSGSFeatureCollectionData;

export type FEATURE_ITEM_TYPE = FEATURE_COLLECTION_TYPE["features"][0];

interface USGSEarthquakeOptions {
  startTime?: Date;
  endTime?: Date;
  isInProd?: boolean;
}

const getServerEndpoint = (startTime: string, endTime: string) =>
  `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}&limit=3000&orderby=magnitude`;

export const useUSGSEarthquakeData = ({
  startTime,
  endTime,
  isInProd,
}: USGSEarthquakeOptions) => {
  const [data, setData] = useState<FEATURE_COLLECTION_TYPE | null>(
    sampleUSGSFeatureCollectionData
  );

  useEffect(() => {
    if (!startTime || !endTime || !isInProd) return;

    const formattedStartTime = startTime.toISOString().substring(0, 10);
    const formattedEndTime = endTime.toISOString().substring(0, 10);

    fetch(getServerEndpoint(formattedStartTime, formattedEndTime))
      .then((res) => res.json())
      .then(setData);

    setData(sampleUSGSFeatureCollectionData);
  }, [startTime, endTime]);

  return data;
};
