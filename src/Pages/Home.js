import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to={"/aboutUs"}>
        <h2>AboutUs</h2>
      </Link>

      <Link to={"/ContactUs"}>
        <h2>ContactUs</h2>
      </Link>

      {/* <Link to={`/ProductDetails/${32}`}>
        <h2>ProductDetails</h2>
      </Link> */}
      <Link to={`/ProductList`}>
        <h2>ProductDetails</h2>
      </Link>

      <Link to={"Cat-List"}>
        <h2>Cat List</h2>
      </Link>

      <Link to={"/cat-detials/:catid"}>
        <h2>Cat Details</h2>
      </Link>
    </div>
  );
}
