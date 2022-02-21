import { useState, Key } from "react";
import { Star, StarFill } from "react-bootstrap-icons";

import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  getPaginatedData: Function;
  productsData: ProductsInterface[];
  setFavListModal: React.Dispatch<React.SetStateAction<ProductsInterface[]>>;
}

export default function ProductItem({
  getPaginatedData,
  productsData,
  setFavListModal,
}: Props) {
  const [favList, setFavList] = useState<ProductsInterface[]>([]);

  function handleFavList(item: ProductsInterface) {
    if (
      favList.some((obj) => {
        return JSON.stringify(obj) === JSON.stringify(item);
      })
    ) {
      setFavList(
        favList.filter((obj) => JSON.stringify(obj) !== JSON.stringify(item))
      );
      setFavListModal(
        favList.filter((obj) => JSON.stringify(obj) !== JSON.stringify(item))
      );
    } else {
      setFavList(favList.concat(item));
      setFavListModal(favList.concat(item));
    }
  }

  return (
    <ul className="w-screen flex p-4 justify-center bg-backblue rounded-md">
      {productsData.length > 0 ? (
        getPaginatedData().map((item: ProductsInterface, key: Key) => {
          return (
            <li
              key={key}
              className="w-1/6 h-full flex flex-col items-center m-2 z-0 bg-white p-2 rounded-md"
            >
              <p>
                {item.title.length > 19
                  ? `${item.title.substring(0, 19)}...`
                  : item.title}
              </p>
              <div className="relative h-2/5 flex justify-center">
                <button
                  type="button"
                  className="absolute mt-2 bg-favback rounded-lg"
                  onClick={() => handleFavList(item)}
                >
                  {favList.some((obj) => {
                    return JSON.stringify(obj) === JSON.stringify(item);
                  }) ? (
                    <StarFill size={20} />
                  ) : (
                    <Star size={20} />
                  )}
                </button>
                <div className="w-full h-full mt-1 flex items-center">
                  <img
                    className="max-h-40 block z-0 rounded"
                    alt={item.title}
                    src={item.image}
                  />
                </div>
              </div>
              <div className="relative w-full h-3/5 flex flex-col justify-evenly items-center">
                <p className="text-textGrey">
                  {item.description.length > 150
                    ? `${item.description.substring(0, 150)}...`
                    : item.description}
                </p>
                <p>
                  <strong>€ {item.price}</strong>
                </p>
                <p className="break-all text-textGrey">{item.email}</p>
              </div>
            </li>
          );
        })
      ) : (
        <li className="flex items-center">No products available</li>
      )}
    </ul>
  );
}
