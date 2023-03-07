/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getWeatherDataFor } from "../../utils/getWeatherDataFor";
import { LocationSVG } from "../../IconSVG/LocationSVG";
import { SunSVG } from "../../IconSVG/SunSVG";
import {
  Button,
  Container,
  DayOfForecast,
  FirstBox,
  MarginSecondBox,
  SecondBox,
  Text400Weight,
  Text500Weight,
  Text600Weight,
  Text700Weight,
  WrapperForecast,
  WrapperIcon,
  WrapperInfo,
  WrapperLocationIcon,
  WrapperMainIconFirstBox,
  WrapperSecondBox,
  WrapperTemaratureFirstBox,
} from "./StyleCityItem";

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
            <Text700Weight
              fontSize="calc(1.4rem + 0.9vw)"
              mediumDPIScreen="calc(1rem + 0.8vw)"
              margin="0"
            >
              Tuesday
            </Text700Weight>
            <Text500Weight
              fontSize="calc(0.7rem + 0.5vw)"
              mediumDPIScreen="calc(0.6rem + 0.4vw)"
              margin="10px 0 16px 0"
            >
              20 Jun 2022
            </Text500Weight>
            <div style={{ display: "flex", alignItems: "center" }}>
              <WrapperLocationIcon>
                <LocationSVG />
              </WrapperLocationIcon>

              <Text600Weight
                fontSize="calc(0.6rem + 0.4vw)"
                mediumDPIScreen="calc(0.5rem + 0.4vw)"
                margin="0 0 0 8px"
              >
                Biarritz, FR
              </Text600Weight>
            </div>
          </div>
          <WrapperTemaratureFirstBox>
            <WrapperMainIconFirstBox>
              <SunSVG />
            </WrapperMainIconFirstBox>

            <Text700Weight
              fontSize="calc(1.8rem + 1.2vw)"
              mediumDPIScreen="calc(1.5rem + 0.9vw)"
              margin="5px 0 0 0"
            >
              29 °C
            </Text700Weight>
            <Text700Weight
              fontSize="calc(1.2rem + 0.7vw)"
              mediumDPIScreen="calc(0.8rem + 0.6vw)"
              margin="13px 0 0 0"
            >
              Sunny
            </Text700Weight>
          </WrapperTemaratureFirstBox>
        </div>
      </FirstBox>
      <SecondBox>
        <WrapperSecondBox>
          <MarginSecondBox>
            <WrapperInfo>
              <Text700Weight
                fontSize="calc(1.1rem + 0.6vw)"
                mediumDPIScreen="calc(0.7rem + 0.4vw)"
                margin="0"
              >
                PRECIPITATION
              </Text700Weight>
              <Text500Weight
                fontSize="calc(1.1rem + 0.6vw)"
                mediumDPIScreen="calc(0.7rem + 0.4vw)"
                margin="0"
              >
                0%
              </Text500Weight>
            </WrapperInfo>
            <WrapperInfo>
              <Text700Weight
                fontSize="calc(1.1rem + 0.6vw)"
                mediumDPIScreen="calc(0.7rem + 0.4vw)"
                margin="0"
              >
                HUMIDITY
              </Text700Weight>
              <Text500Weight
                fontSize="calc(1.1rem + 0.6vw)"
                mediumDPIScreen="calc(0.7rem + 0.4vw)"
                margin="0"
              >
                42%
              </Text500Weight>
            </WrapperInfo>
            <WrapperInfo>
              <Text700Weight
                fontSize="calc(1.1rem + 0.6vw)"
                mediumDPIScreen="calc(0.7rem + 0.4vw)"
                margin="0"
              >
                WIND
              </Text700Weight>
              <Text500Weight
                fontSize="calc(1.1rem + 0.6vw)"
                mediumDPIScreen="calc(0.7rem + 0.4vw)"
                margin="0"
              >
                3 km/h
              </Text500Weight>
            </WrapperInfo>
          </MarginSecondBox>
          <div>
            <WrapperForecast>
              <DayOfForecast>
                <WrapperIcon>
                  <SunSVG />
                </WrapperIcon>
                <Text400Weight
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Tue
                </Text400Weight>
                <Text700Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  margin="0"
                >
                  30 °C
                </Text700Weight>
              </DayOfForecast>
              <DayOfForecast>
                <WrapperIcon>
                  <SunSVG />
                </WrapperIcon>

                <Text400Weight
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Wed
                </Text400Weight>
                <Text700Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  margin="0"
                >
                  22 °C
                </Text700Weight>
              </DayOfForecast>
              <DayOfForecast>
                <WrapperIcon>
                  <SunSVG />
                </WrapperIcon>

                <Text400Weight
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Thu
                </Text400Weight>
                <Text700Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  margin="0"
                >
                  06 °C
                </Text700Weight>
              </DayOfForecast>
              <DayOfForecast>
                <WrapperIcon>
                  <SunSVG />
                </WrapperIcon>

                <Text400Weight
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  fontSize="calc(0.6rem + 0.4vw)"
                  margin="10px 0 15px 0"
                >
                  Fry
                </Text400Weight>
                <Text700Weight
                  fontSize="calc(0.6rem + 0.4vw)"
                  mediumDPIScreen="calc(0.4rem + 0.4vw)"
                  margin="0"
                >
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
