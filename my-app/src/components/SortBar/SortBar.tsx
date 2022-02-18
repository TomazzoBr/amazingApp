export default function SortBar() {
  return (
    <div>
      <form>
        <label htmlFor="products-select">Sort by:</label>
        <select id="products-select">
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
          <option value="email">E-mail</option>
        </select>
      </form>
    </div>
  );
}
