import React from "react";
import styled from "styled-components";
import theme from "@app/theme";
import { MediaQuery } from "@app/types/device";

const HeaderWrapper = styled.header`
  display: flex;
  background: ${theme.BACKGROUND_COLOR};
  color: ${theme.TEXT_COLOR};
  height: 60px;
  flex: 1;
  font-weight: 800;
  padding: 10px 20px;

  ${MediaQuery.PHONE`
    justify-content: center;
    align-items: center;
    font-size: 18px;
  `}

  ${MediaQuery.TABLET`
      font-size: 14px;
  `}

  ${MediaQuery.DESKTOP`
      font-size: 22px;
      font-weight: 700;
  `}

  ${MediaQuery.LARGE`
      font-size: 28px;
  `}
`;

const Heading = styled.h1`
  font-size: 20px;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Heading>SpacEX Launch Programs</Heading>
    </HeaderWrapper>
  );
};

export default Header;
