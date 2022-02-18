import { Suspense, useEffect, useState } from "react";
import { ProductsInterface } from "../../interfaces/ProductsInterface";

import Pagination from "./Pagination/Pagination";
import SortBar from "../SortBar/SortBar";

export default function Products() {
  const [productsData, setProductsData] = useState<ProductsInterface[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
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
  }, [page, totalPages]);

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
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full h-full flex-wrap overflow-y-scroll">
          <ul className="w-full h-full flex p-4">
            {productsData ? (
              productsData.map((item, key) => {
                return (
                  <li key={key} className="w-3/6 m-2">
                    <p>{item.title}</p>
                    <img alt={item.title} src={item.image} />
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
      </Suspense>
    </div>
  );
}
