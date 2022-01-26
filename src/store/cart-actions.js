import { getDocs, updateDoc, doc } from 'firebase/firestore';
import { colRef, auth } from '../firebase';

export const sendCartData = () => {

    return async() => {
        const sendUserCart = async() => {

            const currentUser = auth.currentUser;

            const data = getDocs(colRef)
            .then((snapshot) => {
                
                let users = [];
                snapshot.docs.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });

                return users;
            })


            const d = await data;

            const res = d.filter(user => (user.emailId === currentUser.email));

            const docRef = await doc(colRef, res[0].id);

            await updateDoc(docRef, {
                cartAmount: 5,
            })

            return res[0];
        }

        try {

            const responseData = await sendUserCart();
            console.log(responseData);
        } catch(error) {
            console.log(error);
        }
    }
}