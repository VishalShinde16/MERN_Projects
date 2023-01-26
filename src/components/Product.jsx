import React from 'react'
import styled from 'styled-components'

//icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import styleFunctionSx from '@mui/system/styleFunctionSx';

const Info = styled.div`
    opacity:0;
    height:100%;
    width:100%;
    position:absolute;
    background-color:rgba(0,0,0,0.2);
    display:flex;
    justify-content:center;
    align-items:center;

`

const Container = styled.div`
    min-width:280px;
    height:350px;

    flex:1;
    margin:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #f5fbfd;

    position:relative;
    transition:all 0.5s ease;
    &:hover ${Info}{
        opacity:1;
    }
`
const Image = styled.img`
    height:70%;
    position:absolute;
`



const Icon = styled.div`
    height:40px;
    width:40px;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin:10px;
    cursor:pointer;

    transition:all 0.5s ease;
    &:hover{
        transform:scale(1.1);
        background-color:#e9f5f5;
    }
    
`
const Product = (props) => {
  return (
    <Container>
        <Image src={props.item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product