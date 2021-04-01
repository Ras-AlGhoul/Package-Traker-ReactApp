import React from "react";
import SearchBar from "../components/searchBar";
import Greeting from "../components/greeting";

export default function Home() {
  return (
    <div className="container">
      <Greeting />
      <h3 className="h3">Good to see you again, John Doe</h3>
      <SearchBar />
    </div>
  );
}
