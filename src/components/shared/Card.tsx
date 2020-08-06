import React from "react";
import styled from "styled-components";

type Props = {
  classNName?: string;
  children: JSX.Element;
};

const CardWrapper = styled.div`
  background: white;
  border-radius: 3px;
  width: 100%;
  display: flex;
  padding:20px;
  display: flex;
  flex-direction: column;
`;

const Card: React.FC<Props> = (props: Props) => {
  return <CardWrapper className={props.classNName}>{props.children}</CardWrapper>;
};

export default Card;
