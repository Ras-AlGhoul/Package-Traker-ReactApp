import React from "react";

export default function SearchBar() {
  return (
    <div>
      <form className="search-bar">
        <input type="text" placeholder="Search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
