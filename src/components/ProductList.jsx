import { useEffect, useState } from 'react';
import { useFetchData } from '../data/useFetchData';
import ProductItem from './ProductItem';
import SearchAndFilter from './SearchAndFilter';
const ProductList = () => {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products')
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        setAllProducts(data);
    }, [data]);


    if (loading && allProducts) return <h1>Loading...</h1>
    if (error) return <h1>Seite aktuell nicht aufrufbar...</h1>
    return (
        <>
            <h1 className="text-mantis-900 text-4xl text-center py-4">fakeStore</h1>
            <SearchAndFilter allProducts={allProducts} setAllProducts={setAllProducts} />
            <section className="grid grid-cols-3 gap-6 max-w-3xl p-6 mx-auto">
                {allProducts?.map((product) => <ProductItem
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