import React from "react";
import styled from "styled-components";

import theme from "@app/theme";

type Props = {
  title: string;
  selected?: boolean;
  onClick: () => void;
};

const ButtonWrapper = styled.button<Pick<Props, "selected">>`
  background: ${({ selected }) =>
    selected ? theme.BUTTON_FOCUSED_BACKGROUND : theme.BUTTON_BACKGROUND};
  outline: none;
  border-radius: 3px;
  border: 0px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
  width: 100px;  

`;

const FilterButton: React.FC<Props> = (props: Props) => {
  return <ButtonWrapper {...props}>{props.title}</ButtonWrapper>;
};

export default FilterButton;
