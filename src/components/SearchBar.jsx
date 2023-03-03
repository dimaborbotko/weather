import React, { useEffect, useState } from "react";
import { useGetCityQuery } from "../services/weatherAPI";

export default function SearchBar({manage}) {
  const [skip, setSkip] = useState(true);
  const [cityName, setCityName] = useState("");
  const { data } = useGetCityQuery(cityName, { skip }); 

  useEffect(() => {
    if (cityName !== "") setSkip(false);
    if(cityName.split("").length < 2) setSkip(true)
  }, [cityName]);
  return (
    <>
      <input
        name="city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <div  >
        {data?.length > 0 ? (
          data.map((city, index) => (
            <p key={index} onClick={() => manage.addCity(city?.name)}>{city?.name}</p>
          ))
        ) : (
          null
        )}
      </div>
    </>
  );
}
