export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
  position: relative;

  @media (max-height: 1871px) and (max-width: 3001px) and (orientation: landscape) {
    width: 40vw;
    height: 39vh;
  };

  @media (max-height: 1471px) and (max-width: 2561px) and (orientation: landscape) {
    width: 45vw;
    height: 50vh;
  };

  @media (max-height: 1311px) and (max-width: 2305px) and (orientation: landscape) {
    width: 45vw;
    height: 50vh;
  };

  @media (max-height: 1081px) and (max-width: 1921px) and (orientation: landscape) {
    width: 60vw;
    height: 65vh;
  };

  @media (max-height: 950px) and (max-width: 1920px) and (orientation: landscape) {
    width: 55vw;
    height: 65vh;
  };

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    width: 60vw;
    height: 65vh;
  }

  @media (max-height: 913px) and (max-width: 1369px) and (orientation: landscape) {
    width: 75vw;
    height: 65vh;
  };

  @media (max-height: 639px) and (max-width: 1361px) and (orientation: landscape) {
    width: 55vw;
    height: 65vh;
  };

  @media (max-height: 801px) and (max-width: 1281px) and (orientation: landscape) {
    width: 85vw;
    height: 80vh;
  };

  @media (max-height: 671px) and (max-width: 1281px) and (orientation: landscape) {
    width: 65vw;
    height: 65vh;
  };


  @media (max-height: 821px) and (max-width: 1181px) and (orientation: landscape) {
    width: 85vw;
    height: 75vh;
  }

  @media (max-height: 769px) and (max-width: 1025px) and (orientation: landscape) {
    width: 80vw;
    height: 55vh;
  }

  @media (max-height: 601px) and (max-width: 1025px) and (orientation: landscape) {
    width: 75vw;
    height: 70vh;
  }

  @media (max-height: 541px) and (max-width: 721px) and (orientation: landscape) {
    width: 95vw;
    height: 80vh;
  }
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

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    margin: 35px 0;
  }
`;
export const WrapperTemaratureFirstBox = styled.div`
  margin-bottom: 85px;

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    margin-bottom: 65px;
  }
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (max-height: 671px) and (max-width: 1280px) and (orientation: landscape) {
    margin-top: 0px;
  }
`;
export const WrapperForecast = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-height: 671px) and (max-width: 1280px) and (orientation: landscape) {
    margin-bottom: 15px;
  }
`;
export const DayOfForecast = styled.div`
  padding: 15px 24px 20px 24px;
  background-color: #272e37;
  border-radius: 10px;
  text-align: center;

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    padding: 10px 19px 10px 19px;
  }
`;
export const WrapperIcon = styled.div`
  width: 53px;
  height: 53px;

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    width: 33px;
    height: 33px;
  }
`;

export const WrapperLocationIcon = styled.div`
  width: 27px;
  height: 27px;

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    width: 20px;
    height: 20px;
  }
`;

export const WrapperMainIconFirstBox = styled.div`
  width: 95px;
  height: 95px;

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    width: 70px;
    height: 70px;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border-radius: 10px;
  padding: 14px 0;
  margin-bottom: 50px;

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    padding: 9px 0;
    margin-top: 15px;
  }
`;
export const Text700Weight = styled.h1`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    font-size: ${(props) => props.mediumDPIScreen};
  }
`;
export const Text600Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    font-size: ${(props) => props.mediumDPIScreen};
  }
`;
export const Text500Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    font-size: ${(props) => props.mediumDPIScreen};
  }
`;
export const Text400Weight = styled.p`
  margin: ${(props) => props.margin};
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};

  @media (max-height: 771px) and (max-width: 1441px) and (orientation: landscape) {
    font-size: ${(props) => props.mediumDPIScreen};
  }
`;
