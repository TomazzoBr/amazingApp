import React from "react";
import { useDispatch } from "react-redux";

import SearchBar from "./SearchBar/SearchBar";
import Wallapop from "../../assets/ic-logo-web.svg";
import store from "../../store/store";

export default function Header() {
  const dispatch = useDispatch();

  const toggleModal = (flag: boolean) => {
    dispatch({ type: "header/toggleFavouriteModal", flag: flag });
  };

  return (
    <div className="flex w-full ml-4 justify-between items-center">
      <div>
        <img alt="Wallapop logo" src={Wallapop} />
      </div>
      <SearchBar />
      <button
        className="mr-4"
        onClick={() =>
          toggleModal(!store.getState().toggleFavouriteModalReducer.flag)
        }
      >
        Favourites
      </button>
    </div>
  );
}
