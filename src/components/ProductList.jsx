import { useFetchData } from '../data/useFetchData';
import ProductItem from './ProductItem';
const ProductList = () => {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products')


    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Seite aktuell nicht aufrufbar...</h1>
    return (
        <>
            <h1 className="text-red-300">ProductList</h1>
            <section className="grid grid-cols-3 gap-6 max-w-2xl bg-slate-300 p-6">
                {data?.map((product) => <ProductItem
                    key={product.id}
                    price={product.price}
                    image={product.image}
                    title={product.title}
                    id={product.id}
                />

                )}
            </section>
        </>
    );
}

export default ProductList;