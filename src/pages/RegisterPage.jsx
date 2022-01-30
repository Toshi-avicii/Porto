import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile, getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addDoc, getDocs } from 'firebase/firestore';
import { auth, provider, colRef } from '../firebase';
import { setActiveUser, selectUserName } from '../store/authSlice'; 

function RegisterPage() {
    useEffect(() => {
        document.title = 'Register | Porto';
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(null);

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    // sign in with google
    const signInWithGoogleHandler = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {

            console.log(result);

            dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email,
                userId: result.user.uid,
                userImage: result.user.photoURL
            }));

            let users = [];

            getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });

                const registeredUser = users.find(user => user.emailId === result.user.email);

                if(!registeredUser) {
                    addDoc(colRef, {
                        emailId: result.user.email,
                        name: result.user.displayName,
                        userId: result.user.uid,
                        image: result.user.photoURL,
                        provider: result.providerId,
                        cart: [],
                        wishlist: [],
                        cartAmount: 0,
                        wishlistAmount : 0,
                        totalCartItems: 0,
                        totalWishlistItems: 0,
                    }).then((result) => {
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });

            navigate('/');
        }).catch(error => {
            console.log(error);
        })
    }

    // sign in with email and password: regular sign in method
    const addUserHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            setLoading(false);
            const user = auth.currentUser;
            updateProfile(user, {
                displayName: name
            }).then(() => {
                dispatch(setActiveUser({
                    userName: user.displayName,
                    userEmail: user.email,
                    userId: user.uid
                }));

                addDoc(colRef, {
                    emailId: email,
                    name: name,
                    password: password,
                    provider: user.providerId,
                    userId: user.uid,
                    cart: [],
                    wishlist: [],
                    cartAmount: 0,
                    wishlistAmount: 0,
                    totalCartItems: 0,
                    totalWishlistItems: 0,
                }).then((result) => {});

                navigate('/');
            }).catch(error => {
                console.log(error.message);
            });
        })
        .catch(error => {
            alert(error.message);
            setLoading(false);
            setError(true);
        });

        setEmail('');
        setPassword('');
        setName('');
    }

    return (
        <Container>
            { !loading &&
                <LoginBox>
                <div className="form-header">
                    <p>Register your account</p>
                    {userName ? <p>`Hello ${userName}`</p>: null}
                </div>
                <form onSubmit={addUserHandler}>
                    <div className="name-div">
                        <input type="text" placeholder="User Name" value={name} onChange={nameHandler} />
                    </div>
                    <div className="mail-div">
                        <input type="text" placeholder="Email id" value={email} onChange={emailHandler} />
                    </div>
                    <div className="password-div">
                        <input type="password" placeholder="Your Password" value={password} onChange={passwordHandler} />
                    </div>
                    <div className="submit-btn-div">
                        <button>Register</button>
                    </div>
                </form>

                <p>Connect With:</p>
                
                <div className="brands-btn-div">
                    <button className="google-btn" onClick={signInWithGoogleHandler}>
                        <i className="fab fa-google"></i>
                    </button>
                </div>
                <div className="already-login-div">
                    <p>Already Registered?</p>
                    <Link to="/account/login">Login Here</Link>
                </div>
                </LoginBox>
            }
        { loading && <p>Signing You Up...</p> }
    </Container>
    )
}

export default RegisterPage;

const Container = styled.div`
    background: #f1efef;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`
const LoginBox = styled.div`
    padding: 1.5rem;
    background: white;
    box-shadow: 0px 0px 12px #ebebeb;
    border-radius: 4px;

    .form-header {
        padding: 1rem 0;

        p {
            font-weight: 500;
            font-size: 20px;
        }
    }

    .name-div input, .mail-div input, .password-div input {
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

        @media (max-width: 450px) {
            padding: 0.75rem 1.5rem;
        }
    }

    .already-login-div {
        display: flex;
        margin-top: 1rem;

        a {
            color: black;
            margin-left:8px;
        }
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