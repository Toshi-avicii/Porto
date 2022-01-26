import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { setUserLogout } from '../store/authSlice';


function ProfilePage() {
    
    const currentUser = auth.currentUser;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(currentUser);

    const logoutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUserLogout());
            navigate('/');
        }).catch(error => {
            console.log(error.message);
        });
    }

    return (
        <Container>
            <ProfilePic>
                {currentUser.photoURL ? 
                    <img 
                        src={currentUser.photoURL}
                        width="200px" 
                        height="200px" 
                        style={{ borderRadius: "50%" }} 
                        alt="user"
                    /> : 
                    <span className="fas fa-user"></span>
                }
                
            </ProfilePic>

            <UserInfo>
                <h3>Username: {currentUser.displayName}</h3>
                <h4>User email id: {currentUser.email}</h4>
            </UserInfo>
            <Logout>
                <button onClick={logoutHandler}>Logout</button>
            </Logout>
        </Container>
    )
}

export default ProfilePage;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    flex-direction: column;
`

const ProfilePic = styled.div``

const UserInfo = styled.div``

const Logout = styled.div`

`