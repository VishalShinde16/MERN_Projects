import React from 'react'

import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {sliderItems} from '../data'

import mobile from '../Responsive'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;

    ${mobile({
        display:'none'
        
    })}
    
`
const Arrow = styled.div`
    height:50px;
    width:50px;
    border-radius:50%;
    cursor:pointer;
    background-color:#fff7f7;
    display:flex;
    align-items:center;
    justify-content:center;

    position:absolute;
    top:0;
    bottom:0;
    margin:auto;

    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};

    opacity:0.5;

    z-index:2;
`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(${props=>props.slideIndex * (-100)}vw);
    transition: all 1.5s ease;

`

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color :#${props=>props.bg};

`

const ImgContainer = styled.div`
    flex:1;
    height:100%;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`

 const Image = styled.img`
    height:80%;
    object-fit:cover;

 `

 const Title = styled.h1`
    font-size:70px;
 `

 const Description = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
 `

 const Button = styled.button`
    padding :10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer
 `
const Slider = () => {
    
    const [slideIndex,setSlideIndex] = React.useState(0)

    /* setInterval(()=>{
        setSlideIndex(slideIndex => slideIndex < 2 ? slideIndex+1: 0 )
    },5000) */
    
    //function for moving slider
    const handleClick = (direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex => slideIndex > 0 ? slideIndex-1 : 2)
        }
        else if(direction==='right'){
            setSlideIndex(slideIndex => slideIndex < 2 ? slideIndex+1 : 0)
        }
    }

  return (
    <Container>
        {/* giving direction as prop and using it in styled components */}
        <Arrow direction = "left" onClick={()=> handleClick('left')}>
            <ArrowLeftIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map(item =>{
                return(
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                )
            })}
            
        </Wrapper>
        <Arrow direction = "right" onClick={()=> handleClick('right')}>
            <ArrowRightIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
