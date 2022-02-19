import { useEffect, useState } from "react";
import { ProductsInterface } from "../../interfaces/ProductsInterface";

import ProductItem from "./ProductItem.tsx/ProductItem";
import Pagination from "./Pagination/Pagination";
import SortBar from "../SortBar/SortBar";
import store from "../../store/store";

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

  const getPaginatedData = () => {
    const itemsPerPage = 5;
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
  });

  const toggleFilterValue = store.getState().toggleFilterReducer.value;

  if (toggleFilterValue === "title") {
    productsData.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else if (toggleFilterValue === "description") {
    productsData.sort((a, b) => {
      if (a.description < b.description) {
        return -1;
      }
      if (a.description > b.description) {
        return 1;
      }
      return 0;
    });
  } else if (toggleFilterValue === "price") {
    productsData.sort((a, b): number => {
      return a.price - b.price;
    });
  } else if (toggleFilterValue === "email") {
    productsData.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
  }

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
        <ProductItem
          getPaginatedData={getPaginatedData}
          productsData={productsData}
        />
      </div>
    </div>
  );
}
