import React, { FormEvent, Key, useState } from "react";
import { useDispatch } from "react-redux";
import { Star, StarFill } from "react-bootstrap-icons";
import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  favListModal: ProductsInterface[];
  setFavListModal: React.Dispatch<React.SetStateAction<ProductsInterface[]>>;
}

export default function FavouriteModal({
  favListModal,
  setFavListModal,
}: Props) {
  const [favourites, setFavourites] = useState(favListModal);
  const dispatch = useDispatch();

  const handleFavList = (itemToDelete: ProductsInterface) => {
    const updated = favListModal.filter((item) => {
      return item !== itemToDelete;
    });
    setFavListModal(updated);
    setFavourites(updated);
  };

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    const result = favListModal.filter((product) => {
      if (product.title.toLowerCase().includes(value)) {
        return product;
      } else {
        return null;
      }
    });
    if (result.length > 0) {
      setFavourites(result);
    } else {
      setFavourites([]);
    }
  };

  return (
    <div
      className="fixed w-full h-full left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-lightGrey z-10 bg-opacity-40"
      onClick={() =>
        dispatch({ type: "header/toggleFavouriteModal", flag: false })
      }
    >
      <div
        className="fixed w-2/4 h-3/4 flex flex-col items-center justify-center bg-darkGrey rounded-lg z-50"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked - solution found on codebox: https://codesandbox.io/s/oz8wb?file=/src/index.js:365-478
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col items-center p-4">
          <p className="bg-favback rounded-md p-2">
            <strong>⭐️ Your favourite products ⭐️</strong>
          </p>
          <form
            className="bg-favback rounded-md p-2 mt-2"
            onChange={(event) => handleChange(event)}
          >
            <label className="mr-4">Search</label>
            <input
              type="text"
              className="bg-grey border-1 rounded p-1"
              placeholder="Look for your favourites"
            ></input>
          </form>
        </div>
        <ul className="w-3/4 h-full flex flex-col items-center mb-5 bg-backblue overflow-scroll rounded-lg">
          {Object.keys(favourites).length > 0 ? (
            favourites.map((item: ProductsInterface, key: Key) => {
              return (
                <li
                  key={key}
                  className="w-1/2 h-52 flex flex-col items-center m-5 bg-white p-2 rounded-lg"
                >
                  <div className="flex flex-row justify-between items-center">
                    <p>{item.title}</p>
                    <button
                      type="button"
                      className="flex ml-2 bg-favback rounded-lg"
                      onClick={() => handleFavList(item)}
                    >
                      {favourites.some((obj) => {
                        return JSON.stringify(obj) === JSON.stringify(item);
                      }) ? (
                        <StarFill size={20} />
                      ) : (
                        <Star size={20} />
                      )}
                    </button>
                  </div>
                  <div className="flex w-5/6 h-fit justify-center">
                    <img
                      className="max-h-36 z-0 rounded-md"
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                </li>
              );
            })
          ) : (
            <div className="flex w-full h-full justify-center self-center items-center">
              <p>
                <strong>C'mon, for sure you wanna buy something ;)</strong>
              </p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
