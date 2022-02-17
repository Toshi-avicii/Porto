import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import useSearchData from '../hooks/useSearchData';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

function SearchPage() {
    const [searchParams] = useSearchParams();
    const searchQuery = (Object.fromEntries([...searchParams]).keyword); 
    const { data, loading } = useSearchData(searchQuery.toLowerCase());

    let result;
    let mobResult;

    if(loading) {
        result = <p>Loading...</p>
        mobResult = <p>Loading...</p>
    }

    if(data.length === 0 && !loading) {
        result = <p>No products found. Search for another result</p>
        mobResult = <p>No products found. Search for another result</p>
    } 

    if(!loading && data.length > 0) {
        result = data.map(item => {
            return (
                <Card key={item.id}>
                    <ProductItem 
                        key={item.id} 
                        img={item.images}
                        title={item.title}
                        price={item.price}
                        prevPrice={item.prevPrice}
                        discount={item.discount}
                        id={item.id}
                        rating={item.rating}
                        categories={item.categories}
                        description={item.description}
                        points={item.points}
                    />
                </Card>    
            )
        })
    }

    if(!loading && data.length > 0) {
        mobResult = data.map(item => {
            return (
                <ProductItemList key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <div className="img">
                            <img src={item.images[0]} alt={item.title} />
                        </div>
                        <div className="desc">
                            <div className="title-box">
                                <p>{item.title}</p>
                            </div>
                            <div className="misc">
                                <del>${item.prevPrice}</del>
                                <span>${item.price}</span>
                                <span>{item.rating}/ 5</span>
                            </div>
                        </div>
                    </Link>
                </ProductItemList>
            )
        })
    }

    return (
        <>
            <HeadingBox>
                <h1>Search Results for: {searchQuery}</h1>
            </HeadingBox>
            <Container>
                {result}
                {mobResult}
            </Container>

        </>
    )
}

export default SearchPage;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr );
    padding: 1rem 3rem;

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr );
        padding: 1rem;
        place-items: center;
    }
`

const Card = styled.div`
    width: 350px;
    height: 475px;
    border: 1px solid transparent;
    padding: 1.5rem;
    border-radius: 4px;
    display: grid;
    place-items: center;

    &:hover {
        border: 1px solid lightgrey;
        box-shadow: 0px 0px 12px lightgrey;
    }

    @media (max-width: 768px) {
        height: 450px;
        width: 325px;
        padding: 0.75rem;
        display: none;
    }
`

const HeadingBox = styled.div`
    padding: 1rem 3rem;
`

const ProductItemList = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;

        a {
            display: flex;
            width: 100%;
            text-decoration: none;
            margin: 8px 0;
            box-shadow: 0px 0px 6px lightgrey;
            padding: 10px;

            .img {
                flex: 1;
                height: 100%;
                img {
                    width: 75px;
                    height: 75px;
                }
            }
    
            .desc {
                flex: 4;
                padding-left: 10px;

    
                .title-box {
    
                    a {
                        text-decoration: none;
                        font-size: 17px;
                        color: black;
                    }
                }

                .misc {
                    padding: 10px 0;

                    span {
                        margin: 0 10px;
                        font-size: 17px;
                        font-weight: bold;
                    }
                }
            }
        }
    }

`