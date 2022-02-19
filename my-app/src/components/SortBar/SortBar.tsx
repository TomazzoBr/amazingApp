import { useDispatch } from "react-redux";

export default function SortBar() {
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <label htmlFor="products-select">Sort by:</label>
        <select
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
