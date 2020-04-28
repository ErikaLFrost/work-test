import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import RelatedPages from './components/RelatedPages';
import Ingress from './components/Ingress';
import MainText from './components/MainText';
import MoreBoxSection from './components/MoreBoxSection';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
`;

const SinglePage = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <TextWrapper>
          <Ingress />
          <RelatedPages />
          <MainText />
        </TextWrapper>
        <MoreBoxSection />
      </Wrapper>
    </>
  );
};

export default SinglePage;
