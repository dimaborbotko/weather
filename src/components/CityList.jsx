/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useLazyGetWeatherDataQuery } from "../services/weatherAPI";
import { getWeatherDataFor } from "../utils/getWeatherDataFor";
import { Link } from "react-router-dom";

export default function CityList({ cityArr, manage }) {
  const [weatherData, setWeatherData] = useState([]);
  const [getWeatherData] = useLazyGetWeatherDataQuery();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);

  const { getWeatherForAllCities, addWeatherToList } = getWeatherDataFor();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherForAllCities(cityArr);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    const getWeather = async () => {
      try {
        await addWeatherToList(cityArr, weatherData, setWeatherData);
      } catch (error) {
        setError(error.message);
      }
    };
    getWeather();
  }, [cityArr]);

  const handleDeleteCity = (city) => {
    const delCity = weatherData.filter((data) => data?.location?.name !== city);
    setWeatherData(delCity);
    manage.deleteCity(city);
  };

  const handleUpdateWeatherData = async (city) => {
    const { data, fulfilledTimeStamp } = await getWeatherData(city);
    if (data) {
      const cityToChange = weatherData.filter(
        (item) => item?.location?.name === city
      );
      const index = weatherData.indexOf(cityToChange[0]);
      weatherData.splice(index, 1, data);
      console.log(
        `timestamp: ${fulfilledTimeStamp}, weatherData: ${weatherData}`
      );
    }
  };

  const handleDeleteAll = () => {
    setWeatherData([]);
    manage.clearCities();
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <button onClick={() => handleDeleteAll()}>delete all</button>
      {weatherData.map((item, index) => (
        <div key={index} style={{ backgroundColor: "#cbcbcb" }}>
          <Link to={`/city?city=${item?.location?.name}`}>
            <p>{item?.location?.name}</p>
            <p>{item?.current?.temp_c}</p>
          </Link>
          <button onClick={() => handleDeleteCity(item?.location?.name)}>
            delete
          </button>
          <button onClick={() => handleUpdateWeatherData(item?.location?.name)}>
            update
          </button>
        </div>
      ))}
    </>
  );
}
