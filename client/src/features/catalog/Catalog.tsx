import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/Products/getAll")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []); //dependency [] znaci da ce ovo biti pozvano samo jednom

    return (
        <>
            <ProductList products={products}/>
      </>
    )
}