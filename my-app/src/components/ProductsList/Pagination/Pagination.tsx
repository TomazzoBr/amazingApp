import PropTypes from "prop-types";

interface Props {
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
}: Props) {
  return (
    <div className="flex">
      <button
        className=""
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
      >
        &larr;
      </button>

      <span className="">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="text-black"
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
