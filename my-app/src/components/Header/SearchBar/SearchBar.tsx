import { useState } from "react";
import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilteredProd: React.Dispatch<React.SetStateAction<ProductsInterface[]>>;
  products: ProductsInterface[];
}

export default function SearchBar({
  setSearch,
  setFilteredProd,
  products,
}: SearchBarProps) {
  const [searchBar, setSearchBar] = useState("");

  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase();
    console.log(value);
    const result = products.filter((product) => {
      if (
        product.title.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value) ||
        product.price.toString().toLowerCase().includes(value) ||
        product.email.toLowerCase().includes(value)
      ) {
        return product;
      } else {
        return null;
      }
    });
    setFilteredProd(result);
  };

  const handleChange = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
    setSearchBar(target.value);
  };

  return (
    <div className="w-2/3 ml-4">
      <form
        className="flex justify-between"
        onChange={(event) => handleSearch(event)}
      >
        <input
          className="w-full bg-grey border-1 rounded p-1"
          type="text"
          placeholder="Check our amazing selection of products"
          value={searchBar}
          onChange={handleChange}
        />
        <button className="w-16 ml-2 bg-popcolor rounded-md opacity-80 hover:opacity-100 hover:shadow-md">
          Pop!
        </button>
      </form>
    </div>
  );
}
