import { weatherAPI } from "../services/weatherAPI";

export const getWeatherDataFor = () => {
  const [getWeatherData] = weatherAPI.useLazyGetWeatherDataQuery();

  const getWeatherForCityItem = async (city) => {
    try {
      const { data } = await getWeatherData(city);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getWeatherForAllCities = async (cityArr) => {
    try {
      const data = await Promise.all(
        cityArr.map((city) => getWeatherForCityItem(city))
      );
      return data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };

  const addWeatherToList = async (cityArr, weatherData, setWeatherData) => {
    try {
      if (cityArr.length > 0) {
        const latestCity = cityArr[cityArr.length - 1];
        const cityAlreadyExists = weatherData.some(
          (cityData) => cityData?.location?.name === latestCity
        );

        if (!cityAlreadyExists) {
          const data = await getWeatherForCityItem(latestCity);
          setWeatherData((prev) => [...prev, data]);
        }
        console.log("UPDATE");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
  return {
    getWeatherForCityItem,
    getWeatherForAllCities,
    addWeatherToList,
  };
};
