import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { getLaunches } from "@app/store/actions/getLaunches";
import Header from "@app/components/index/Header";

import { Context } from "./_app";
import Filters from "@app/components/index/Filters";
import Programs from "@app/components/index/Programs";

const PageSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PageFilter = styled(Filters)`
  
`;

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <PageSection>
        <PageFilter />
        <div></div>
        <Programs />
      </PageSection>
    </>
  );
};

Index.getInitialProps = async ({ store }: Context) => {
  await getLaunches()(store.dispatch);
};

export default Index;
