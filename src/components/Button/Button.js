import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  cursor: pointer;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.borderRadius}px;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border: none;
  transition: background-color 0.3s;
  opacity: ${(props) => props.opacity};

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: -40px;
    width: 250px;
  }
`;

const Button = ({
  size,
  onClick,
  color,
  width,
  borderRadius,
  backgroundColor,
  hoverColor,
  children,
  opacity,
}) => {
  return (
    <CustomButton
      size={size}
      onClick={onClick}
      color={color}
      width={width}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      opacity={opacity}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
