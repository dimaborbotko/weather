/* eslint-disable */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { getWeatherDataFor } from "../utils/getWeatherDataFor";
import { LocationSVG } from "../IconSVG/LocationSVG";
import { SunSVG } from "../IconSVG/SunSVG";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
  position: relative;
`;
const FirstBox = styled.div`
  width: 48%;
  border-radius: 30px;
  background: blue;
  z-index: 999;
`;
const SecondBox = styled.div`
  width: 52%;
  margin: 21px 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #222831;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 47%;
`;
const WrapperSecondBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  height: 100%;
`;
const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const WrapperForecast = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
const DayOfForecast = styled.div`
  padding: 15px 24px 20px 24px;
  background-color: #272e37;
  border-radius: 10px;
  text-align: center;
`;
const WrapperButton = styled.div``;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border-radius: 10px;
  padding: 14px 0;
  margin-bottom: 50px;
`;
const Text700Weight = styled.h1`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
`;
const Text600Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
`;
const Text500Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
`;
const Text400Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
`;

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
  {
    /* <p style={{ margin: 0 }}>{weatherData?.location?.name}</p> */
  }
  return (
    <Container>
      <FirstBox>
        <div
          style={{
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <Text700Weight fontSize="calc(1.4rem + 0.9vw)" margin="0">
              Tuesday
            </Text700Weight>
            <Text500Weight
              fontSize="calc(0.7rem + 0.5vw)"
              margin="10px 0 16px 0"
            >
              20 Jun 2022
            </Text500Weight>
            <div style={{ display: "flex", alignItems: "center" }}>
              <LocationSVG width="27px" height="27px" />
              <Text600Weight fontSize="calc(0.6rem + 0.4vw)" margin="0 0 0 8px">
                Biarritz, FR
              </Text600Weight>
            </div>
          </div>
          <div style={{ marginBottom: "85px" }}>
            <SunSVG width="95px" height="95px" />
            <Text700Weight fontSize="calc(1.8rem + 1.2vw)" margin="5px 0 0 0">
              29 °C
            </Text700Weight>
            <Text700Weight fontSize="calc(1.2rem + 0.7vw)" margin="13px 0 0 0">
              Sunny
            </Text700Weight>
          </div>
        </div>
      </FirstBox>
      <SecondBox>
        <WrapperSecondBox>
          <div style={{ margin: "55px 0" }}>
            <WrapperInfo>
              <Text700Weight fontSize="calc(1.1rem + 0.6vw)" margin="0">
                PRECIPITATION
              </Text700Weight>
              <Text500Weight fontSize="calc(1.1rem + 0.6vw)" margin="0">
                0%
              </Text500Weight>
            </WrapperInfo>
            <WrapperInfo>
              <Text700Weight fontSize="calc(1.1rem + 0.6vw)" margin="0">
                HUMIDITY
              </Text700Weight>
              <Text500Weight fontSize="calc(1.1rem + 0.6vw)" margin="0">
                42%
              </Text500Weight>
            </WrapperInfo>
            <WrapperInfo>
              <Text700Weight fontSize="calc(1.1rem + 0.6vw)" margin="0">
                WIND
              </Text700Weight>
              <Text500Weight fontSize="calc(1.1rem + 0.6vw)" margin="0">
                3 km/h
              </Text500Weight>
            </WrapperInfo>
          </div>
          <div>
            <WrapperForecast>
              <DayOfForecast>
                <SunSVG width="53px" height="53px" />
                <Text400Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Tue
                </Text400Weight>
                <Text700Weight fontSize="calc(0.6rem + 0.4vw)" margin="0">
                  30 °C
                </Text700Weight>
              </DayOfForecast>
              <DayOfForecast>
                <SunSVG width="53px" height="53px" />
                <Text400Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Wed
                </Text400Weight>
                <Text700Weight fontSize="calc(0.6rem + 0.4vw)" margin="0">
                  22 °C
                </Text700Weight>
              </DayOfForecast>
              <DayOfForecast>
                <SunSVG width="53px" height="53px" />
                <Text400Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Thu
                </Text400Weight>
                <Text700Weight fontSize="calc(0.6rem + 0.4vw)" margin="0">
                  06 °C
                </Text700Weight>
              </DayOfForecast>
              <DayOfForecast>
                <SunSVG width="53px" height="53px" />
                <Text400Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Fry
                </Text400Weight>
                <Text700Weight fontSize="calc(0.6rem + 0.4vw)" margin="0">
                  26 °C
                </Text700Weight>
              </DayOfForecast>
            </WrapperForecast>
          </div>
          <div>
            <Button>
              <LocationSVG width="30px" height="30px" />
              <Text600Weight fontSize="calc(0.6rem + 0.4vw)" margin="0 0 0 8px">
                Change City
              </Text600Weight>
            </Button>
          </div>
        </WrapperSecondBox>
      </SecondBox>
    </Container>
  );
}
