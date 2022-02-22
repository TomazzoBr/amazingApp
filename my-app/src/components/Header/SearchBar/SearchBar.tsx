import { FormEvent, useState } from "react";
import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface SearchBarProps {
  setFilteredProd: React.Dispatch<React.SetStateAction<ProductsInterface[]>>;
  products: ProductsInterface[];
}

export default function SearchBar({
  setFilteredProd,
  products,
}: SearchBarProps) {
  const [searchBar, setSearchBar] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
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
