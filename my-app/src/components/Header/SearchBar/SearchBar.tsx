import { useState } from "react";

export default function SearchBar() {
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSearchBar(target.value);
  };

  return (
    <div className="w-1/2 ml-4">
      <form>
        <input
          className="w-full border-2 bg-grey"
          type="text"
          value={searchBar}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
