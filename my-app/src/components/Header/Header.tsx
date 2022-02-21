import React from "react";
import { useDispatch } from "react-redux";

import { ProductsInterface } from "../../interfaces/ProductsInterface";
import SearchBar from "./SearchBar/SearchBar";
import Wallapop from "../../assets/ic-logo-web.svg";
import store from "../../store/store";

interface HeaderProps {
  setFilteredProd: React.Dispatch<React.SetStateAction<ProductsInterface[]>>;
  products: ProductsInterface[];
}

export default function Header({ setFilteredProd, products }: HeaderProps) {
  const dispatch = useDispatch();

  const toggleModal = (flag: boolean) => {
    dispatch({ type: "header/toggleFavouriteModal", flag: flag });
  };

  return (
    <div className="flex w-full h-full justify-between items-center bg-backgreen rounded-md">
      <div className="p-2">
        <img alt="Wallapop logo" src={Wallapop} />
      </div>
      <SearchBar setFilteredProd={setFilteredProd} products={products} />
      <button
        className="flex h-3/4 items-center mr-4 bg-favback rounded-md p-2 opacity-90 hover:opacity-100 hover:shadow-md"
        onClick={() =>
          toggleModal(!store.getState().toggleFavouriteModalReducer.flag)
        }
      >
        Favourites
      </button>
    </div>
  );
}
