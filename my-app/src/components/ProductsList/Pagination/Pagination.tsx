import PropTypes from "prop-types";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}
export default function Pagination({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) {
  return (
    <div className="flex items-center">
      <button
        className="bg-white mr-2 rounded-xl p-1 shadow-md hover:shadow-none"
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
      >
        &larr;
      </button>

      <span className="bg-white rounded-md p-1 shadow-md">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="bg-white ml-2 rounded-xl p-1 shadow-md hover:shadow-none"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
      >
        &rarr;
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};
