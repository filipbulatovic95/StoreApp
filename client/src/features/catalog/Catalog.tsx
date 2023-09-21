import { useEffect, useState } from "react";

import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
  setProductParams,
} from "./CatalogSlice";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import ChackBoxButtons from "../../app/components/ChackBoxButtons";
import AppPagination from "../../app/components/AppPagination";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "price", label: "Price - Low to high" },
];

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status, filtersLoaded, brands, types, productParams, metaData } =
    useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  // if (status.includes("pending") || !metaData)
  //   return <LoadingComponent message="Loading products..." />;

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <RadioButtonGroup 
           selectedValue = {productParams.orderBy}
           onChange={(event : any) => dispatch(setProductParams({orderBy : event.target.value}))}
           sortOptions={sortOptions}
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <ChackBoxButtons 
           items={brands}
           checked={productParams.brands}
           onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
        <ChackBoxButtons 
           items={types}
           checked={productParams.types}
           onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
          />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={9} sx={{mb: 2}}>
        {metaData && 
        
       <AppPagination
       metaData={metaData}
       onPageChange={(page: number) => dispatch(setProductParams({pageNumber: page}))}
       />
        }
      </Grid>
    </Grid>
  );
}
