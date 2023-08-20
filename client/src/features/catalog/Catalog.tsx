import {useEffect, useState} from 'react';

import { Button } from "@mui/material";
import { Product } from "../../app/layout/models/product";
import ProductList from "./ProductList";



export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    
    fetch("http://localhost:5000/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // function addProduct() {
  //   setProducts((prev: Product[]) => [
  //     ...prev,
  //     {
  //       id: prev.length + 101,
  //       name: "product" + (prev.length + 1),
  //       price: prev.length * 100 + 100,
  //       brand: "some brand",
  //       description: "some description",
  //       pictureUrl: "https://picsum.photos/200",
  //       type: 'for winter'
  //     },
  //   ]);
  // }
  

  return (
    <>
      <ProductList products={products}/>
      
    </>
  );
}
