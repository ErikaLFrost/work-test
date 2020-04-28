import React from 'react';
import styled from 'styled-components';
import illustration from '../assets/Illustration.png';
import skatteverketlogo from '../assets/logo-skatteverket.png';

const BoxSectionWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  order: 4;
  height: 40vw;
  background-color: rgb(242, 242, 242);
  margin-top: 3vw;
  @media (max-width: 720px) {
    flex-direction: column;
    height: auto;
  }
`;

const BoxOne = styled.div`
  height: 30vw;
  width: 35vw;
  background-color: white;
  margin-right: 10vw;
  img {
    width: 60%;
    padding-top: 30px;
    margin: 0 auto;
  }
  p {
    font-size: 1.2vw;
    /* line-height: 1.5; */
    padding: 20px 4vw 4.5vw;
  }
  button {
    background-color: rgb(0, 153, 119);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1vw;
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px 3vw;
  }
  @media (max-width: 720px) {
    height: 50vw;
    width: 55vw;
    margin-top: 20px;
    margin-right: 0;
    p {
      font-size: 2vw;
      padding-top: 15px;
    }
    button {
      font-size: 2vw;
    }
  }
`;

const BoxTwo = styled.div`
  height: 30vw;
  width: 35vw;
  background: url(${illustration}) no-repeat;
  background-size: contain;
  background-position: center;
  background-color: rgb(0, 153, 119);
  @media (max-width: 720px) {
    height: 50vw;
    width: 55vw;
    margin: 20px 0;
  }
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
        <button>Läs mer</button>
      </BoxOne>
      <BoxTwo></BoxTwo>
    </BoxSectionWrapper>
  );
};

export default MoreBoxSection;
