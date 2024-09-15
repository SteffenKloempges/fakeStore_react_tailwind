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
                <button onClick={() => sortBy("desc")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">Highest Price</button>
                <button onClick={() => sortBy("asc")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">Lowest Price</button>
                <button onClick={() => sortBy("rate")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">Best Rate</button>
                <button onClick={() => setAllProducts(data)}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">View All</button>
            </div>
            <div className="flex gap-4 justify-center mb-4">
                <button onClick={() => filterBy("women's clothing")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">women's clothing</button>
                <button onClick={() => filterBy("men's clothing")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">men's clothing</button>
                <button onClick={() => filterBy("jewelery")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">jewelery</button>
                <button onClick={() => filterBy("electronics")}
                    className="bg-mantis-400 rounded-md px-4 py-2 text-white transition-colors hover:bg-mantis-500">electronics</button>
            </div>
        </>

    );
}

export default SearchAndFilter;