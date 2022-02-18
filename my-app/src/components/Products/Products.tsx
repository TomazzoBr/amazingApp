import { useEffect, useState } from "react";
import { ProductsInterface } from "../../interfaces/ProductsInterface";

import { Star, StarFill } from "react-bootstrap-icons";
import Pagination from "./Pagination/Pagination";
import SortBar from "../SortBar/SortBar";

export default function Products() {
  const itemsPerPage = 5;
  const [productsData, setProductsData] = useState<ProductsInterface[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favButton, setFavButton] = useState(false);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  const getPaginatedData = () => {
    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productsData.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json`
      );
      const result = await response.json();
      setProductsData(result.items);
      setTotalPages(result.items.length / 5);
    };
    fetchData();
  }, [page]);

  return (
    <div className="w-full flex-wrap justify-center">
      <div className="w-full h-8 flex justify-around items-center  mt-4">
        <SortBar />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
      <div className="w-full flex-wrap">
        <ul className="w-screen flex p-4 overflow-y-scroll">
          {productsData ? (
            getPaginatedData().map((item, key) => {
              return (
                <li key={key} className="w-1/6 m-2">
                  <p>{item.title}</p>
                  <div className="relative">
                    <button
                      className="absolute right-0 bg-white"
                      onClick={() => setFavButton(!favButton)}
                    >
                      {favButton ? <StarFill /> : <Star />}
                    </button>
                    <img className="block" alt={item.title} src={item.image} />
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
      </div>
    </div>
  );
}
