import { Link } from "react-router-dom";


const ProductItem = ({ price, image, title, id }) => {


    return (
        <Link to={`/article/${id}`} className="block bg-mantis-300 p-2 rounded-md transition-transform hover:scale-105">
            <article>
                <img src={image} alt="" className="w-full h-60 object-cover" />
                <h2 className="text-xl text-mantis-900 mt-4">{title}</h2>
                <p className="text-mantis-950 mt-4">{price} €</p>
            </article>
        </Link>
    );
}

export default ProductItem;