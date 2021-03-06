import React from 'react';
import styled from 'styled-components';
import robertAvatar from '../assets/avatar-robert.png';

const StyledIngress = styled.div`
  flex: 3 0px;
  order: 1;
  position: relative;
  margin: 0;
  width: 40%;
  text-align: start;
  p {
    font-size: 1.5vw;
    &:first-child {
      padding-bottom: 2vw;
    }
  }
  &::after {
    content: '';
    width: 100%;
    border-bottom: solid 1px #ebebeb;
    position: absolute;
    left: 0;

    z-index: 1;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  img {
    display: inline-block;
    vertical-align: bottom;
    width: 12%;
  }
  p {
    display: inline-block;
    vertical-align: bottom;
    font-size: 1vw;
    padding-left: 4px;
    a {
      color: #009d82;
    }
  }
  span {
    display: inline-block;
    vertical-align: bottom;
    font-size: 1vw;
  }
`;

const Ingress = () => {
  return (
    <StyledIngress>
      <p>
        Om du redan har skrivit kontrakt för en ny bostad men inte har något
        lånelöfte hos oss kan du göra en bolåneansökan. Fyll i dina uppgifter i
        ansökan och skicka in. Efter att vi gått igenom din ansökan ringer vi
        upp dig.
      </p>
      <Author>
        <div>
          <img src={robertAvatar} />
          <p>
            <a href="#">Robert Boije</a>, Chefsekeonom
          </p>
        </div>
        <div>
          <span>2018-08-15</span>
        </div>
      </Author>
    </StyledIngress>
  );
};

export default Ingress;
