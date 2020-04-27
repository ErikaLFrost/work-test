import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Wrapper = styled.div`
width: 100%;
height: 100%;
font-family: Helvetica, Arial, Sans-Serif;
`

const SinglePage = () => {

    return (
        <Wrapper>
            <Header/>
        </Wrapper>
    )
}

export default SinglePage;