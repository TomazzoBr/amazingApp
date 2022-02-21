import { Key } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  favListModal: ProductsInterface[];
}

export default function FavouriteModal({ favListModal }: Props) {
  const favList = favListModal;
  return (
    <div className="fixed w-2/4 h-3/4 flex flex-col items-center justify-center bg-darkGrey rounded z-50">
      <div className="flex flex-col items-center p-4">
        <p className="bg-favback rounded-md p-2">
          <strong>⭐️ Your favourite products ⭐️</strong>
        </p>
        <form className="bg-favback rounded-md p-2 mt-2">
          <label className="mr-4">Search</label>
          <input
            type="text"
            className="bg-grey border-1 rounded p-1"
            placeholder="Look for favourites"
          ></input>
        </form>
      </div>
      <ul className="w-3/4 h-full flex flex-col items-center mb-5 bg-backblue overflow-scroll rounded-lg">
        {Object.keys(favList).length > 0 ? (
          favList.map((item: ProductsInterface, key: Key) => {
            return (
              <li
                key={key}
                className="flex flex-col w-1/2 h-1/2 items-center m-7"
              >
                <p>{item.title}</p>
                <div className="relative">
                  <button
                    type="button"
                    className="absolute right-0 bg-favback rounded-lg"
                    // onClick={() => handleFavList(item)}
                  >
                    {favList.some((obj) => {
                      return JSON.stringify(obj) === JSON.stringify(item);
                    }) ? (
                      <StarFill size={20} />
                    ) : (
                      <Star size={20} />
                    )}
                  </button>
                  <img
                    className="max-h-60 block z-0"
                    alt={item.title}
                    src={item.image}
                  />
                </div>
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
