import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/icon-arrow-alt-circle-up.svg';
import calendarIcon from '../assets/icon-calendar-check.svg';
import cloneIcon from '../assets/icon-clone.svg';

const StyledRelatedPages = styled.div`
  flex: 1 auto;
  order: 2;
  text-align: end;
  div {
    display: inline-block;
    text-align: start;
    width: 60%;
    margin-right: 0;
  }
  h3 {
    text-transform: uppercase;
    font-size: 1.5vw;
    margin-bottom: 10px;
  }
`;

const List = styled.ul`
  list-style: none;
  li {
    padding-bottom: 1.8vw;
    @media (max-width: 720px) {
      padding-bottom: 0;
    }
  }
  img {
    display: inline-block;
    width: 2vw;
    vertical-align: top;
  }
  p {
    display: inline-block;
    margin: 0;
    padding-left: 10px;
    vertical-align: top;
    font-size: 1.3vw;
  }
`;

const RelatedPages = () => {
  return (
    <StyledRelatedPages>
      <div>
        <h3>Relaterade sidor</h3>
        <List>
          <li>
            <img src={arrowIcon} />
            <p>Aktuella sparräntor</p>
          </li>
          <li>
            <img src={calendarIcon} />
            <p>Jämför din sparränta</p>
          </li>
          <li>
            <img src={cloneIcon} />
            <p>Barnsparkonto</p>
          </li>
        </List>
      </div>
    </StyledRelatedPages>
  );
};

export default RelatedPages;
