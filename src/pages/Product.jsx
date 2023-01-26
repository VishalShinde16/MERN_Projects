import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import mobile from '../Responsive'

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 50px;

    ${mobile({
        flexDirection:'column',
        padding:'10px'
    })}
`
const ImgContainer = styled.div`
    flex:1;

`
const Image = styled.img`
    height: 75vh;
    width: 80%;
    object-fit: cover;
    ${mobile({
        height:'40vh',
        width:'100%',
    })}

`
const InfoContainer = styled.div`
    flex:1;
`

const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.h1`
    font-weight: 100;
    font-size: 40px;
    ${mobile({
        marginTop:'30px'
    })}
`

const FilterContainer = styled.div`
    display: flex;
    margin:30px 0;
    justify-content: space-between;
    width: 50%;

    ${mobile({
        width:'100%',
        marginTop:'40px'
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 5px;

    ${mobile({
        display:'block',
    })}
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin:0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;

    ${mobile({
        width:'100%',

    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    font-weight: 700;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    padding: 10px 10px;
    border:2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    transition: all 0.3s ease;
    &:hover{
        background-color: teal;
        color: white;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jacket</Title>
                <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae eum perspiciatis eius illum accusamus quis qui laudantium soluta temporibus iusto!</Desc>
                <Price><CurrencyRupeeIcon/>999</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color:</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='gray'/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon/>
                    </AmountContainer>
                    
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product