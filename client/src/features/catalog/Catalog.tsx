import agent from "../../app/api/agent";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";


export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      agent.Catalog.list().then(products => setProducts(products))
    }, []); //dependency [] znaci da ce ovo biti pozvano samo jednom

    return (
        <>
            <ProductList products={products}/>
      </>
    )
}