import { Key } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  favListModal: ProductsInterface[];
}

export default function FavouriteModal({ favListModal }: Props) {
  console.log(favListModal);
  const favList = favListModal;
  return (
    <div className="fixed w-3/4 h-3/4 flex items-center justify-center bg-slate-300 z-50">
      <ul>
        {Object.keys(favList).length > 0 ? (
          favList.map((item: ProductsInterface, key: Key) => {
            return (
              <li key={key}>
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
