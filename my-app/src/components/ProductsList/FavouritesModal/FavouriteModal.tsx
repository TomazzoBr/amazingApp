import { Key } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  favListModal: ProductsInterface[];
}

export default function FavouriteModal({ favListModal }: Props) {
  const favList = favListModal;
  return (
    <div className="fixed w-5/6 h-3/4 flex flex-col items-center justify-center bg-slate-300 z-50">
      <div className="flex flex-col items-center p-4">
        <p>
          <strong>Your favourite products</strong>
        </p>
        <form>
          <label className="mr-4">Search</label>
          <input type="text"></input>
        </form>
      </div>
      <ul className="w-full h-full flex flex-col items-center overflow-scroll mb-5">
        {Object.keys(favList).length > 0 ? (
          favList.map((item: ProductsInterface, key: Key) => {
            return (
              <li
                key={key}
                className="flex flex-col w-1/2 h-1/2 items-center m-5"
              >
                <p>{item.title}</p>
                <div className="relative">
                  <button
                    type="button"
                    className="absolute right-0 bg-white"
                    // onClick={() => handleFavList(item)}
                  >
                    {favList.some((obj) => {
                      return JSON.stringify(obj) === JSON.stringify(item);
                    }) ? (
                      <StarFill />
                    ) : (
                      <Star />
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
