import React, { useEffect, useState } from "react";
import { useLazyGetWeatherDataQuery } from "../services/weatherAPI";

export default function CityList({ cityArr }) {
  const [weatherData, setWeatherData] = useState([]);
  const [getWeatherData] = useLazyGetWeatherDataQuery();

  useEffect(() => {
    const getWeather = async () => {
      if (cityArr.length > 0) {
        const { data } = await getWeatherData(cityArr.reverse()[0]);
        setWeatherData((prev) => [...prev, data])
        console.log(data)
      }
    };
    getWeather();
  }, [cityArr, getWeatherData]);

  console.log(weatherData)

  return (
    <>
      {weatherData.map((item, index) => (
        <div key={index} style={{ backgroundColor: "#cbcbcb" }}>
          <p>{item?.location?.name}</p>
          <p>{item?.current?.temp_c}</p>
        </div>
      ))}
    </>
  );
}
