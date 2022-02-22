import React, { FormEvent, Key, useState } from "react";
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
    <div className="fixed w-2/4 h-3/4 flex flex-col items-center justify-center bg-darkGrey rounded z-50">
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
            placeholder="Look for favourites"
          ></input>
        </form>
      </div>
      <ul className="w-3/4 h-full flex flex-col items-center mb-5 bg-backblue overflow-scroll rounded-lg">
        {Object.keys(favourites).length > 0 ? (
          favourites.map((item: ProductsInterface, key: Key) => {
            return (
              <li
                key={key}
                className="w-1/2 h-56 flex flex-col items-center m-7 bg-white p-2 rounded-lg"
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
                <img
                  className="relative max-h-40 block z-0 rounded-md"
                  alt={item.title}
                  src={item.image}
                />
              </li>
            );
          })
        ) : (
          <div>
            <p>Nothing in your favourite list</p>
          </div>
        )}
      </ul>
    </div>
  );
}
