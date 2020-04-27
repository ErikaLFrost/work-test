import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import RelatedPages from './components/RelatedPages';
import Ingress from './components/Ingress';
import MainText from './components/MainText';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Raleway', sans-serif;
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
    <Wrapper>
      <Header />
      <TextWrapper>
        <Ingress />
        <RelatedPages />
        <MainText />
      </TextWrapper>
    </Wrapper>
  );
};

export default SinglePage;
