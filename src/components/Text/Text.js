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

  @media (max-width: 768px) {
    font-size: ${(props) => props.sizeMobile};
    font-weight: ${(props) => props.weightMobile};
    color: ${(props) => props.colorMobile || "black"};
    letter-spacing: ${(props) => props.letterSpacingMobile}px;
    text-align: ${(props) => props.textAlignMobile};
    padding: ${(props) => props.paddingMobile.top};
    ${(props) => props.paddingMobile.right};
    ${(props) => props.paddingMobile.bottom};
    ${(props) => props.paddingMobile.left};
  }
`;

const Text = ({
  className,
  size,
  weight,
  color,
  letterSpacing = 0,
  children,
  textAlign,
  width,
  sizeMobile,
  weightMobile,
  colorMobile,
  letterSpacingMobile = 0,
  textAlignMobile,
  padding = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  paddingMobile = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
  margin = { top: "0px", right: "0px", bottom: "0px", left: "0px" },
}) => {
  return (
    <CustomText
      className={className}
      size={size}
      weight={weight}
      color={color}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      width={width}
      padding={padding}
      margin={margin}
      paddingMobile={paddingMobile}
      sizeMobile={sizeMobile}
      weightMobile={weightMobile}
      colorMobile={colorMobile}
      letterSpacingMobile={letterSpacingMobile}
      textAlignMobile={textAlignMobile}
    >
      {children}
    </CustomText>
  );
};

export default Text;
