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
                    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;

    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 30%;
    background-color: white;

    ${mobile({
       width:'75%',
    
    })}
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
       width :'90%',
    })}
`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Links = styled.a`
    text-decoration: underline;
    margin: 5px 0 ;
    cursor: pointer;
    color: black;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='Username' />
                    <Input placeholder='Password' />
                </Form>

                <Button>LOGIN</Button>

                <Links href='#'>Forgot password ?</Links>
                <Links>Create a new account</Links>

            </Wrapper>
        </Container>
    )
}

export default Login