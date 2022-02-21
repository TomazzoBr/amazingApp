import { useState } from "react";

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (event: any) => void;
}

export default function SearchBar({ setSearch, handleSearch }: SearchBarProps) {
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSearch(target.value);
    setSearchBar(target.value);
    console.log(event);
    handleSearch(event);
  };

  return (
    <div className="w-2/3 ml-4">
      <form className="flex justify-between">
        <input
          className="w-full bg-grey border-1 rounded p-1"
          type="text"
          placeholder="Check our amazing selection of products"
          value={searchBar}
          onChange={handleChange}
        />
        <button className="w-16 ml-2 bg-popcolor rounded-md opacity-80 hover:opacity-100 hover:shadow-md">
          Pop!
        </button>
      </form>
    </div>
  );
}
