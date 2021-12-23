import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const useFetchData = (filter, returnedItems = 20) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async() => {
            const dataRef = collection(db, 'products');
            const response = await getDocs(dataRef);

            if(!filter) {
                let items = [];

                response.docs.map((doc) => {
                    if(items.length < returnedItems) {
                        return items.push({ ...doc.data(), id: doc.id });
                    }

                    return items;
                });

                return items;
            } 
            
            if(filter) {
                const q = query(dataRef, where(filter, "==", true));
                const querySnapshot = await getDocs(q);
                let items = [];

                querySnapshot.forEach((doc) => {
                    items.push({ ...doc.data(), id: doc.id });
                });

                console.log(items);

                return items;
            }
        }

        try {
            getProducts().then((result) => {
                setLoading(false);
                setData(result);
            });
        } catch(error) {
            console.log(error.message);
        }

        return () => {}
    }, [filter, returnedItems]);

    return { data, loading };
}

export default useFetchData;