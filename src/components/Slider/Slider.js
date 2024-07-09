import React, { useState } from "react";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import sliderItems from "../../data/data";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  position: relative;
  overflow: hidden;
  border-right: 2px #ff97f7;
  @media (max-width: 768px) {
    margin-top: -100px;
    width: 400px;
    height: 200px;
  }
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  color: aliceblue;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "25px"};
  right: ${(props) => props.direction === "right" && "25px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media (max-width: 768px) {
    left: ${(props) => props.direction === "left" && "5px"};
    right: ${(props) => props.direction === "right" && "5px"};
  }
`;

const Wrapper = styled.div`
  height: 1000px;
  display: flex;
  transition: all 0.3s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  @media (max-width: 768px) {
    height: 30vh;
    width: 100vw;
  }
`;

const Image = styled.img`
  padding-left: 25px;
  height: 40%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-left: 0;
  }
`;

const ResetButton = styled.div`
  width: 40px;
  height: 40px;
  color: aliceblue;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 85%;
  left: 7.5%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  @media (max-width: 768px) {
    left: 6.5%;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleDirectionClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    } else if (direction === "none") {
      setSlideIndex(0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleDirectionClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <ImageContainer>
            <Image src={item.img} alt="image_01"></Image>
          </ImageContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleDirectionClick("right")}>
        <ArrowRightIcon />
      </Arrow>
      <ResetButton onClick={() => handleDirectionClick("none")}>
        <RestartAltIcon />
      </ResetButton>
    </Container>
  );
};

export default Slider;
