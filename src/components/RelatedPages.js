import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/icon-arrow-alt-circle-up.svg';
import calendarIcon from '../assets/icon-calendar-check.svg';
import cloneIcon from '../assets/icon-clone.svg';

const StyledRelatedPages = styled.div`
  flex: 1 auto;
  order: 2;
  h3 {
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  li {
    img {
    }
    p {
    }
  }
`;

const RelatedPages = () => {
  return (
    <StyledRelatedPages>
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
    </StyledRelatedPages>
  );
};

export default RelatedPages;
