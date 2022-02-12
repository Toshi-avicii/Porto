import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

const useSearchData = (searchString) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSearchResults = async() => {
            const dataRef = collection(db, 'products');
            const response = await getDocs(dataRef);
            let filteredDataItems = [];

            if(searchString === '' || !searchString) {
                setLoading(false);
                return filteredDataItems;
            } 

            if(searchString !== '') {
                let items = [];

                response.docs.map((doc) => {
                    items.push({ ...doc.data(), id: doc.id });
                    return items;
                });

                const results = items.filter(item => {
                    const searched = item.title.toLowerCase().includes(searchString);
                    return searched;
                });

                filteredDataItems = results;
            }

            return filteredDataItems;
        }

        try {
            getSearchResults().then((result) => {
                setData(result);
            });
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log(error.message);
        }

        return () => {}
    }, [searchString]);
    
    return { data, loading };
}

export default useSearchData;