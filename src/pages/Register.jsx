import React from 'react'
import styled from 'styled-components'

import mobile from '../Responsive'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
                    url('https://img.freepik.com/premium-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000') center;
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    background-color: white;

    ${mobile({    
        width:'75%',
       
    }
    )}
`

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    margin: 10px 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
    
`

const Input = styled.input`
    margin:0 50px 15px 0px;
    padding: 10px;
    font-size: 14px;
    ${mobile({    
        width:'90%',
        margin:'5px 0',
    }
    )}
`

const Aggrement = styled.span`
    font-size: 14px;
    margin: 10px 0px;

    ${mobile({    
        display:'block',   
    }
    )}
`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='First Name' />
                    <Input placeholder='Last Name' />
                    <Input placeholder='Username' />
                    <Input placeholder='Email' />
                    <Input placeholder='Password' />
                    <Input placeholder='Confirm Password' />
                </Form>

                <Aggrement>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dicta alias minus deserunt, atque doloribus!
                </Aggrement>

                <Button>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register