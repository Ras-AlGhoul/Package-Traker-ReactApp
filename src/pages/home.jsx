import React from "react";
import SearchBar from "../components/searchBar";
import Greeting from "../components/greeting";

export default function Home({ username }) {
  return (
    <div>
      <Greeting />
      <h3 className="h3">Good to see you again, {username}!</h3>
      <SearchBar />
    </div>
  );
}
