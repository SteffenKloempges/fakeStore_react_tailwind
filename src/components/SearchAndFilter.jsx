import { useFetchData } from "../data/useFetchData";

const SearchAndFilter = ({ allProducts, setAllProducts }) => {
    const { data } = useFetchData('https://fakestoreapi.com/products');
    console.log(allProducts)

    const sortBy = (sortProperty) => {
        const copyProducts = [...allProducts];
        switch (sortProperty) {
            case "asc":
                copyProducts.sort((priceA, priceB) => priceA.price - priceB.price);
                break;
            case "desc":
                copyProducts.sort((priceA, priceB) => priceB.price - priceA.price);
                break;
            case "rate":
                copyProducts.sort((rateA, rateB) => rateB.rating.rate - rateA.rating.rate);
                break;
        }
        setAllProducts(copyProducts);
    }

    const filterBy = (filterProperty) => {
        const filteredProducts = data.filter((item) => {
            console.log(item.category);
            if (item.category === filterProperty) {
                return item;
            }
        })
        setAllProducts(filteredProducts);
    }

    return (
        <>
            <div className="flex gap-4 justify-center my-4">
                <button onClick={() => sortBy("desc")}>Highest Price</button>
                <button onClick={() => sortBy("asc")}>Lowest Price</button>
                <button onClick={() => sortBy("rate")}>Best Rate</button>
                <button onClick={() => setAllProducts(data)}>View All</button>
            </div>
            <div className="flex gap-4 justify-center mb-4">
                <button onClick={() => filterBy("women's clothing")}>women's clothing</button>
                <button onClick={() => filterBy("men's clothing")}>men's clothing</button>
                <button onClick={() => filterBy("jewelery")}>jewelery</button>
                <button onClick={() => filterBy("electronics")}>electronics</button>
            </div>
        </>

    );
}

export default SearchAndFilter;