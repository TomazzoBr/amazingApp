import { useEffect, useState } from "react";
import { ProductsInterface } from "../../interfaces/ProductsInterface";

import ProductItem from "./ProductItem.tsx/ProductItem";
import Pagination from "./Pagination/Pagination";
import SortBar from "../SortBar/SortBar";
import store from "../../store/store";
import FavouriteModal from "./FavouritesModal/FavouriteModal";

interface Props {
  filteredProd: ProductsInterface[];
}

export default function ProductsList({ filteredProd }: Props) {
  const [productsData, setProductsData] = useState<ProductsInterface[]>([]);
  const [favListModal, setFavListModal] = useState<ProductsInterface[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setProductsData(filteredProd);
    setTotalPages(Math.ceil(filteredProd.length / 5));
  }, [filteredProd]);

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
    <div className="w-full h-full flex flex-wrap justify-center">
      <div className="w-3/4 h-12 flex justify-around items-center bg-backgreen mt-2 rounded-md">
        <SortBar />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
      <div className="relative w-full h-full flex flex-wrap justify-center">
        {store.getState().toggleFavouriteModalReducer.flag ? (
          <FavouriteModal
            favListModal={favListModal}
            setFavListModal={setFavListModal}
          />
        ) : null}
        <div className="flex w-full h-full p-3">
          <ProductItem
            getPaginatedData={getPaginatedData}
            productsData={productsData}
            setFavListModal={setFavListModal}
          />
        </div>
      </div>
    </div>
  );
}
