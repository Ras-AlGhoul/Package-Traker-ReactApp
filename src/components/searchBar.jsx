import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function SearchBar() {
  // State
  const [query, setQuery] = useState("");

  // Property
  const history = useHistory();

  // Methods
  function onSearch(event) {
    event.preventDefault();

    history.push(`/results/${query}`);
  }

  return (
    <div>
      <form onSubmit={onSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search Parcel..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
