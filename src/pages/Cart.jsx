import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

import mobile from '../Responsive';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px 15px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type === 'filled' && 'none'};
    background-color:${props=>props.type === 'filled' ? 'black':'transparent'};
    color:${props=>props.type === 'filled' && 'white'};


`

const TopTexts =styled.div`
    ${mobile({
        display:'none',
    })}
`

const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection:'column',
    })}
`

const Info = styled.div`
    flex:3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection:'column',
        marginBottom:'15px'
    })}
`

const ProductDetail = styled.div`
    flex:2;
    display:flex;
    
    /* background-color:blue ; */
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mobile({
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        // backgroundColor:'red'
    })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    ${mobile({
        marginBottom:'0px'
    })}
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({
        margin:'0px 15px'
    })}
    
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height: 50vh;

    ${mobile({
        margin:'15px 0px'
    })}

`
const SummaryTitle = styled.h1`
    font-weight: 200;
    ${mobile({
        textAlign:'center'
    })}
`

const SummaryItem = styled.div`
    margin:30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '500'};
    font-size:${props=>props.type === 'total' && '24px'};
`


const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Hr = styled.hr`
    background-color: #d6d6d6b7;
    border: none;
    height: 1px;
    margin-right: 5px;
`



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>Checkout Now</TopButton>
            </Top>

            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b> Denim Jeans
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> 472398798
                                </ProductId>
                                <ProductColor color='black'/>
                                <ProductSize>
                                    <b>Size:</b> 7
                                </ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>2</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>

                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr></Hr>
                    <Product>
                        <ProductDetail>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b> Denim Jeans
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> Denim Jeans
                                </ProductId>
                                <ProductColor color='black'/>
                                <ProductSize>
                                    <b>Size:</b> 7
                                </ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>2</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>

                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr></Hr>

                    <Product>
                        <ProductDetail>
                            <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b> Denim Jeans
                                </ProductName>
                                <ProductId>
                                    <b>ID:</b> Denim Jeans
                                </ProductId>
                                <ProductColor color='black'/>
                                <ProductSize>
                                    <b>Size:</b> 7
                                </ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveIcon/>
                                <ProductAmount>2</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>

                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr></Hr>

                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>

                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart