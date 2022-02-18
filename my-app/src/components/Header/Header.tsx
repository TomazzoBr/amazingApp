import React, { useState } from "react";

import Wallapop from "../../assets/ic-logo-web.svg";

export default function Header() {
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSearchBar(target.value);
  };

  return (
    <div className="flex w-full ml-4 mt-2 items-center">
      <div>
        <img alt="Wallapop logo" src={Wallapop} />
      </div>
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
    </div>
  );
}
