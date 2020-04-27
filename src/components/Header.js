import React from 'react';
import styled from 'styled-components';
import orangeHouse from '../assets/orange_house.jpg'

const HeaderWrapper = styled.div`
width: 100%;
height: 360px;
display: flex;
flex-direction: column;
/* background-color: blue; */
background-image: linear-gradient(to bottom right,  #bedfe4 0%,#d9eef3 100%);
`

const HeaderImage = styled.div`
width: 100%;
height: 100%;
background-size: 80%;
background-repeat: no-repeat;
background-position: 50% -40vw; 
background-image: url(${props => props.img});
`
const HeaderText = styled.div`
position: absolute;
color: rgb(254, 255, 255);
text-align: start;
padding: 5px; 
h2{
    background-color: rgb(50, 50, 49);
}
p{
    background-color: rgb(50, 50, 49);
}
`

const Header = () => {
return(
    <HeaderWrapper>
        <HeaderImage img={orangeHouse}/>
        <HeaderText>
            <h2>Sparkonto <br/> med bra ränta</h2>
            <p>Med vårt sparkonto får du 0,60% ränta och fira uttag.</p>
        </HeaderText>
    </HeaderWrapper>
)
}

export default Header;