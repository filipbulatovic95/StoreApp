import {  Grid  } from "@mui/material";
import { Product } from "../../app/layout/models/product";
import ProductCard from "./ProductCard";


interface Props{
    products: Product[];
    
}

export default function ProductList({products} : Props){

console.log(products);
    return (
        <Grid container spacing={4}>
        {products.map(product => ( 
            <Grid item xs={4} key={product.id}>
                <ProductCard key={product.id} product={product}/>
            </Grid>
        ))}
      </Grid>
    )
}