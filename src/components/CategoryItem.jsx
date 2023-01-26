import React from 'react'

import styled from 'styled-components'

import mobile from '../Responsive'

const Container = styled.div`
    flex:1;
    position:relative;
    margin:3px;
    height:70vh;
    
`
const Image = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;

    ${mobile({
        height:'30vh'
        
    })}
    
`

const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Title = styled.h1`
    color:white;
    margin-bottom:10px;
`
const Button = styled.button`
    background-color:white;
    border:none;
    padding:10px;
    color:gray;
    font-weight:600;
    cursor:pointer;
`

const CategoryItem = (props) => {
  return (
    <Container>
        <Image src={props.item.img}></Image>

        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem