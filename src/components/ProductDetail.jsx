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
        <section className="max-w-2xl p-4 mx-auto">
            <button onClick={() => navigate(-1)}
                className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500"
            >Back</button>
            <img src={data.image} alt="" className="w-1/2 mx-auto my-8" />
            <h1 className="py-4 text-xl">{data.title}</h1>
            <p className="py-4">{data.description}</p>
            <p className="py-4">{data.price} €</p>
            <div className="flex justify-center items-center gap-4 py-4">
                <button onClick={() => setNumberOfItems(numberOfItems + 1)}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">+</button>
                <p>{numberOfItems}</p>
                <button onClick={() => setNumberOfItems(numberOfItems - 1)}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">-</button>
            </div>
        </section>
    );
}

export default ProductDetails;