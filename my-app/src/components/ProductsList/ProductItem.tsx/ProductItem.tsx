import { useState, Key } from "react";

import { Star, StarFill } from "react-bootstrap-icons";

import { ProductsInterface } from "../../../interfaces/ProductsInterface";

interface Props {
  getPaginatedData: Function;
  productsData: ProductsInterface[];
  setTotalPages: (active: number) => void;
}

export default function ProductItem({
  getPaginatedData,
  productsData,
  setTotalPages,
}: Props) {
  const [favList, setFavList] = useState<ProductsInterface[]>([]);
  console.log(favList);

  return (
    <ul className="w-screen flex p-4 overflow-y-scroll">
      {productsData ? (
        getPaginatedData().map(
          (item: ProductsInterface, key: Key | null | undefined) => {
            return (
              <li key={key} className="w-1/6 m-2">
                <p>{item.title}</p>
                <div className="relative">
                  <button
                    type="button"
                    className="absolute right-0 bg-white"
                    onClick={() => setFavList(favList.concat(item))}
                  >
                    {favList.filter((obj) => obj.title === item.title) ? (
                      <StarFill />
                    ) : (
                      <Star />
                    )}
                  </button>
                  <img className="block" alt={item.title} src={item.image} />
                </div>
                <p>{item.description}</p>
                <p>€ {item.price}</p>
                <p>{item.email}</p>
              </li>
            );
          }
        )
      ) : (
        <li>No products available</li>
      )}
    </ul>
  );
}
