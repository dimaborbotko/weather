/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getWeatherDataFor } from "../utils/getWeatherDataFor";

export default function CityItem() {
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  const { getWeatherForCityItem } = getWeatherDataFor();

  const [searchParams] = useSearchParams();
  let city = searchParams.get("city");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await getWeatherForCityItem(city);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    if (city) getWeather();
  }, [city]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>{weatherData?.location?.name}</p>
      <p>{weatherData?.current?.temp_c}</p>
    </div>
  );
}
