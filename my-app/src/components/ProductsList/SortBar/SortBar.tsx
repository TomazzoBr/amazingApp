import { useDispatch } from "react-redux";

export default function SortBar() {
  const dispatch = useDispatch();

  return (
    <div className="w-1/2">
      <form className="flex flex-row justify-center items-center">
        <label
          className="bg-white p-1 rounded-md shadow-sm"
          htmlFor="products-select"
        >
          Sort by:
        </label>
        <select
          className="w-1/3 h-1/3 ml-2 rounded-md shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onChange={(e) =>
            dispatch({ type: "products/toggleFilter", value: e.target.value })
          }
        >
          <option value="none">No filter</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
          <option value="email">E-mail</option>
        </select>
      </form>
    </div>
  );
}
