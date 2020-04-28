import React from 'react';
import styled from 'styled-components';
import illustration from '../assets/Illustration.png';
import skatteverketlogo from '../assets/logo-skatteverket.png';

const BoxSectionWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  order: 4;
  height: 400px;
  background-color: rgb(242, 242, 242);
`;

const BoxOne = styled.div`
  height: 75%;
  width: 40%;
  background-color: white;
  margin-right: 20px;
  img {
    width: 60%;
    padding-top: 15px;
  }
  p {
    padding: 0 10px;
  }
`;
const BoxTwo = styled.div`
  height: 75%;
  width: 40%;
  background: url(${illustration}) no-repeat;
  background-size: contain;
  background-position: center;
  background-color: rgb(0, 153, 119);
`;

const MoreBoxSection = () => {
  return (
    <BoxSectionWrapper>
      <BoxOne>
        <img src={skatteverketlogo} />
        <p>
          Visste du att du kan anmäla ditt sparkonto till Skatteverket? Logga in
          och anmäl ditt konto redan idag så får du in skatteåterbäringen direkt
          på ditt sparkonto.
        </p>
      </BoxOne>
      <BoxTwo></BoxTwo>
    </BoxSectionWrapper>
  );
};

export default MoreBoxSection;
