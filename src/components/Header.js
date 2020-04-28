import React from 'react';
import styled from 'styled-components';
import orangeHouse from '../assets/orange_house.jpg';

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom right, #bedfe4 0%, #d9eef3 100%);
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 50% -40vw;
  background-image: url(${(props) => props.img});
`;

const StyledHeaderText = styled.div`
  position: absolute;
  left: 5%;
  top: 10vw;
  color: #feffff;
  text-align: start;
  padding: 5px;
  div {
    display: table;
    background-color: #323231;
    border: #323231 1px solid;
    h2 {
      padding: 5px;
      font-size: 5vw;
      line-height: 1;
    }
    p {
      padding: 5px;
      font-size: 1.7vw;
      font-weight: bold;
      span {
        color: #e03e08;
      }
    }
  }
`;

const HeaderText = () => {
  return (
    <StyledHeaderText>
      <div>
        <h2>Sparkonto</h2>
      </div>
      <div>
        <h2>med bra ränta</h2>
      </div>
      <div>
        <p>
          Med vårt sparkonto får du <span>0,60</span>% ränta och fria uttag.
        </p>
      </div>
    </StyledHeaderText>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImage img={orangeHouse} />
      <HeaderText />
    </HeaderWrapper>
  );
};

export default Header;
