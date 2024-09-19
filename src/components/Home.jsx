import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to book Store</h1>
      <Link to={"/add"} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-primary">Add Books</button>
      </Link>
      <Link to={"/view"} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-primary">View Books</button>
      </Link>
    </div>
  );
}

export default Home;
