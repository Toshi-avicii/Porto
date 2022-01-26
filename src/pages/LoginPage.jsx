import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { setActiveUser } from '../store/authSlice';

function LoginPage() {
    useEffect(() => {
        document.title = 'Login | Porto';
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const signInWithGoogleHandler = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
                userId: result.user.uid,
                userImage: result.user.photoURL
            }));

            navigate('/');
        }).catch(error => {
            console.log(error);
        })
    }

    const loginHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(result => {
            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
                userId: result.user.uid
            }));
            navigate('/');
        }).catch(error => {
            console.log(error.message);
            alert('User not registered, please register first')
        })
    }

    return (
        <Container>
            <LoginBox>
                <div className="form-header">
                    <p>Login to your account</p>
                </div>
                <form onSubmit={loginHandler}>
                    <div className="name-div">
                        <input type="text" placeholder="Your Email id" value={email} onChange={emailHandler} />
                    </div>
                    <div className="password-div">
                        <input type="password" placeholder="Your Password" value={password} onChange={passwordHandler} />
                    </div>
                    <div className="submit-btn-div">
                        <button>Login</button>
                    </div>
                </form>
                <div className="forgot-password-div">
                    <Link to="/account/forgot-password">Forgot Password?</Link>
                </div>

                <p>Connect With:</p>
                
                <div className="brands-btn-div">
                    <button className="google-btn" onClick={signInWithGoogleHandler}>
                        <i className="fab fa-google"></i>
                    </button>
                </div>
            </LoginBox>
        </Container>
    )
}

export default LoginPage

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

    .forgot-password-div a {
        background: none;
        display: block;
        color: black;
        padding: 0;
        margin: 1rem 0;
        font-size: 1rem;

        &:hover {
            color: #ff595e;
            background: none;
        }
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

    .form-header {
        padding: 1rem 0;

        p {
            font-weight: 500;
            font-size: 20px;
        }
    }

    .name-div input, .password-div input {
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

    .submit-btn-div button {
        width: 100%;
        font-size: 1.15rem;
        padding: 1rem 2rem;
    }

    .brands-btn-div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            border-radius: 0px;
            padding: 1rem 2.5rem;

            i {
                font-size: 16px;
            }
        }

        .google-btn {
            background: #dd4b39;
        }

        .facebook-btn {
            background: #3b5999;
        }

        .twitter-btn {
            background: #55acee;
        }
    }

    @media (max-width: 576px) {
        width: 400px;
    }

    @media (max-width: 450px) {
        width: 320px;
    }
`