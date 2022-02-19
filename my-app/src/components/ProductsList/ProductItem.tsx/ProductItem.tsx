import { useState, Key } from "react";

import { Star, StarFill } from "react-bootstrap-icons";

import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  getPaginatedData: Function;
  productsData: ProductsInterface[];
}

export default function ProductItem({ getPaginatedData, productsData }: Props) {
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
    } else {
      setFavList(favList.concat(item));
    }
  }

  return (
    <ul className="w-screen flex p-4 overflow-y-scroll">
      {productsData ? (
        getPaginatedData().map((item: ProductsInterface, key: Key) => {
          return (
            <li key={key} className="w-1/6 m-2">
              <p>{item.title}</p>
              <div className="relative">
                <button
                  type="button"
                  className="absolute right-0 bg-white"
                  onClick={() => handleFavList(item)}
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
                  className="max-h-60 block"
                  alt={item.title}
                  src={item.image}
                />
              </div>
              <p>{item.description}</p>
              <p>€ {item.price}</p>
              <p>{item.email}</p>
            </li>
          );
        })
      ) : (
        <li>No products available</li>
      )}
    </ul>
  );
}
