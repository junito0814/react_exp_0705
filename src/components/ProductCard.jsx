import React from 'react'
//moduleと記載したcssは使いたい部品で読み込む必要あり
import styles from "./ProductCard.module.css";
import { Package, Pencil, Soup } from "lucide-react";

function ProductCard({ name, price, stock }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>
                <Package size={18} /> {name}
            </h2>
            <p className={styles.price}>¥{price}</p>
            {stock === 0 ? (
                <p className={styles.stock}>在庫切れ</p>
            ) : (
                <p className={styles.stock}>在庫 {stock}</p>
            )}
            <button className={styles.button}>
                <Soup />
                <Pencil size={14} /> 編集
            </button>
        </div>
    );
}

export default ProductCard;

