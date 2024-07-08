import React from "react";
import styled from "styled-components";

const CustomText = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color || "black"};
  letter-spacing: ${(props) => props.letterSpacing}px;
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding.top} ${(props) => props.padding.right}
    ${(props) => props.padding.bottom} ${(props) => props.padding.left};
  margin: ${(props) => props.padding.top} ${(props) => props.padding.right}
    ${(props) => props.padding.bottom} ${(props) => props.padding.left};
`;

const Text = ({
  size,
  weight,
  color,
  letterSpacing = 0,
  children,
  textAlign,
  width,
  padding = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  margin = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
}) => {
  return (
    <CustomText
      size={size}
      weight={weight}
      color={color}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      width={width}
      padding={padding}
      margin={margin}
    >
      {children}
    </CustomText>
  );
};

export default Text;
