import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

function ForgotPasswordPage() {
    useEffect(() => {
        document.title = 'Forgot Password | Porto';
    }, []);

    const [email, setEmail] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:3000/account/login'
        }).then(() => {
                console.log('password reset mail sent')
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Container>
            <LoginBox>
                <div className="form-header">
                    <p>Enter Your Email id here</p>
                </div>
                <form onSubmit={formHandler}>
                    <div className="email-div">
                        <input type="email" placeholder="Your Email id" value={email} onChange={emailHandler} />
                    </div>

                    <div className="submit-btn-div">
                        <button>Submit</button>
                    </div>
                </form>
            </LoginBox>
        </Container>
    )
}

export default ForgotPasswordPage;

const Container = styled.div`
    background: #f1efef;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    overflow: hidden;
`
const LoginBox = styled.div`

    box-shadow: 0px 0px 12px #ebebeb;
    border-radius: 4px;
    padding: 1.5rem;
    background: white;

    .email-div input {
        border: 1px solid lightgrey;
        padding: 1.15rem;
        width: 400px;
        margin: 0.6rem 0;
        font-size: 1.15rem;

        @media (max-width: 576px) {
            padding: 0.6rem;
            font-size: 1rem;
            width: 350px;
        }
    
        @media (max-width: 450px) {
            padding: 0.6rem;
            font-size: 1rem;
            width: 270px;
        }
    }

   

    input:focus {
        outline: 1px solid #ff595e;
        border: none;
    }

    button {
        border: none;
        background: #ff595e;
        color: white;
        padding: 0.75rem 2rem;
        cursor: pointer;
        margin: 10px 0;
        border-radius: 4px;

        &:hover {
            background: #000013;
            transition: 0.25s;
        }
    }

    .submit-btn-div button {
        width: 100%;
        font-size: 1.15rem;
        padding: 1rem 2rem;
    }
`
