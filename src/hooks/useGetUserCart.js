import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { colRef, auth } from '../firebase';


const currentUser = auth.currentUser;
const useGetUserCart = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const getUserData = async() => {

            const data = getDocs(colRef)
            .then((snapshot) => {
                
                let users = [];
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });
    
                return users;
            })

            const d = await data;

            const res = d.find(user => (user.emailId === currentUser.email));

            return res;
        }

        try {
            getUserData().then(res => {
                setUserData(res);
            })
        } catch(error) {    
            console.log(error.message);
        }
        
    }, []);

    return { userData }
}

export default useGetUserCart;