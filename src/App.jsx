import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import styles from "./App.module.css";


function App() {

  // 商品データ（あとで自由に増やせます）
  const products = [
    { id: 1, name: "Tシャツ", price: 2980, stock: 12 },
    { id: 2, name: "マグカップ", price: 1200, stock: 0 },
    { id: 3, name: "ステッカー", price: 400, stock: 88 },
  ];

  return (
    <>
      <h1>React</h1>
      <div className={styles.list}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </div>
    </>
  );
}

export default App;
