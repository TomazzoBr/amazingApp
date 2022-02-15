import React, { useState } from "react";

import Wallapop from "../../assets/ic-logo-web.svg";

function Header() {
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSearchBar(target.value);
  };

  return (
    <div className="flex w-full items-center">
      <div>
        <img alt="Wallapop logo" src={Wallapop} />
      </div>
      <div>
        <form>
          <input type="text" value={searchBar} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default Header;
