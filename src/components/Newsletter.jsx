import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

import mobile from '../Responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({
        fontSize:'40px' 
    })}
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

    ${mobile({
        textAlign:'center',
        fontSize:'12px'
        
    })}
`

const InputContainer = styled.div`
    width: 50%;
    height:40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    ${mobile({
        width:'70%',
        height:'30px'
        
    })}
`
const Input = styled.input`
    flex:8;
    border: none;
    padding-left: 20px;
    
`

const Button = styled.button`
    flex:1;
    background-color: teal;
    color:white;
    border: none;
    cursor: pointer;
    ${mobile({
        padding:'0 10px'  
    })}
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email'></Input>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter