import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const weatherAPI = createApi({
    reducerPath: "weather",
    baseQuery: fetchBaseQuery({baseUrl: `http://api.weatherapi.com/v1`}),
    endpoints: (builder) => ({
        getCity: builder.query({
            query: (cityName) => `search.json?key=${process.env.REACT_APP_WEATHER_API}&q=${cityName}`,
            keepUnusedDataFor: 300,
        }),
        getWeatherData: builder.query({
            query: (cityName) => `forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${cityName}&days=1&aqi=no&alerts=no`
        })
    })
}) 

export const {useGetCityQuery, useLazyGetWeatherDataQuery} = weatherAPI;

