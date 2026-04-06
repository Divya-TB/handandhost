"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000") // 👈 your Node API
      .then((res) => {
        console.log(res.data); // check in console
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
}