import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from '../data/useFetchData';
import { useState } from "react";


const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [numberOfItems, setNumberOfItems] = useState(1);
    const { data, loading, error } = useFetchData(`https://fakestoreapi.com/products/${id}`);


    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Artikel aktuell nicht aufrufbar...</h1>


    return (
        <section className="max-w-2xl">
            <button onClick={() => navigate(-1)}>Back</button>
            <img src={data.image} alt="" className="w-1/2 mx-auto my-8" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.price} €</p>
            <div>
                <button onClick={() => setNumberOfItems(numberOfItems + 1)}>+</button>
                <p>{numberOfItems}</p>
                <button onClick={() => setNumberOfItems(numberOfItems - 1)}>-</button>
            </div>
        </section>
    );
}

export default ProductDetails;