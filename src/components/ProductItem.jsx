import { Link } from "react-router-dom";

const ProductItem = ({ price, image, title, id }) => {

    return (
        <Link to={`/article/${id}`} className="block bg-slate-100 p-2 rounded-md">
            <article>
                <img src={image} alt="" className="w-full h-60 object-cover" />
                <h2 className="text-xl mt-4">{title}</h2>
                <p className="text-blue-500 mt-4">{price} €</p>
            </article>
        </Link>
    );
}

export default ProductItem;