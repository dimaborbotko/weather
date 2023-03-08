import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  width: calc(60vw + 3vw);
  height: 600px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 3001px) and (orientation: landscape) {
    width: calc(60vw - 15vw);
    height: 600px;
  };
  @media (max-width: 2451px) and (orientation: landscape) {
    width: calc(60vw - 10vw);
    height: 600px;
  };
  @media (max-width: 2231px) and (orientation: landscape) {
    width: calc(60vw - 5vw);
    height: 600px;
  };
  @media (max-width: 1991px) and (orientation: landscape) {
    width: calc(60vw + 3vw);
    height: 600px;
  };
  @media (max-width: 1741px) and (orientation: landscape) {
    width: calc(60vw + 10vw);
    height: 600px;
  };
  @media (max-width: 1551px) and (orientation: landscape) {
    width: calc(60vw + 20vw);
    height: 600px;
  };
  @media (max-width: 1351px) and (orientation: landscape) {
    width: calc(60vw + 30vw);
    height: 600px;
  };
`;
export const FirstBox = styled.div`
  width: 48%;
  border-radius: 30px;
  background: blue;
  z-index: 999;
`;
export const SecondBox = styled.div`
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
export const WrapperSecondBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  height: 100%;
`;
export const MarginSecondBox = styled.div`
  margin: 55px 0;
`;
export const WrapperTemaratureFirstBox = styled.div`
  margin-bottom: 85px;
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const WrapperForecast = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DayOfForecast = styled.div`
  padding: 15px 24px 20px 24px;
  background-color: #272e37;
  border-radius: 10px;
  text-align: center;
`;
export const WrapperIcon = styled.div`
  width: 53px;
  height: 53px;
`;

export const WrapperLocationIcon = styled.div`
  width: 27px;
  height: 27px;
`;

export const WrapperMainIconFirstBox = styled.div`
  width: 95px;
  height: 95px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border-radius: 10px;
  padding: 14px 0;
  margin-bottom: 50px;
  margin-top: 20px
`;
export const Text700Weight = styled.h1`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
`;
export const Text600Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
`;
export const Text500Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
`;
export const Text400Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
`;
