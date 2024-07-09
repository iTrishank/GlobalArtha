import React from "react";
import Slider from "../components/Slider/Slider";
import Text from "../components/Text/Text";
import Button from "../components/Button/Button";
import styled from "styled-components";
import "./Home.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(to right, #05203c, #fff, #fff);

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background: linear-gradient(to top, #05203c, #fff);
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const Line = styled.div`
  width: 0.05px;
  height: 75%;
  background-color: #05203c;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 767px) {
    display: none;
  }
`;

const Home = () => {
  const handleClick = () => {
    const fileUrl = require("../assests/GlobalArtha.pdf");
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "GlobalArtha.pdf");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <Container>
      <LeftSection>
        <Slider />

        <Button
          size="20px"
          onClick={handleClick}
          color="white"
          width={247}
          borderRadius={50}
          backgroundColor="#05203C"
          hoverColor="lightblue"
        >
          Download Presentation
        </Button>
      </LeftSection>
      <Line></Line>
      <RightSection>
        <div style={{ marginBottom: "-100px" }}>
          <Text
            size="60px"
            weight={50}
            color="05203C"
            letterSpacing={15}
            sizeMobile="50px"
            letterSpacingMobile={1}
            weightMobile={100}
          >
            GLOBAL ARTHA
          </Text>
          <Text
            size="35px"
            weight={200}
            color="05203C"
            textAlign="center"
            sizeMobile="25px"
          >
            Business Beyond Borders
          </Text>
        </div>
        <div className="subText">
          <Text
            size="20px"
            weight={300}
            color="black"
            textAlign="center"
            width="80%"
            sizeMobile="15px"
          >
            An International B2B marketplace designed to bring together
            businessmen from around the global
          </Text>
        </div>

        <Text
          size="20px"
          weight={400}
          color="05203c"
          padding={{ top: "10px", right: "0px", bottom: "0px", left: "0px" }}
        >
          Coming Soon
        </Text>
      </RightSection>
    </Container>
  );
};

export default Home;
