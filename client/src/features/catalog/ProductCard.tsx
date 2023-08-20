import {
  Avatar,
  CardContent,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import { Product } from "../../app/layout/models/product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductList({ product }: Props) {

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{bgcolor: 'secondary.main'}}>{product.name.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
        titleTypographyProps={{sx: {fontWeight: 'bold' , color: 'primary.main'}}}
      />
      <CardMedia
      sx={{height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
      src={product.pictureUrl}
      title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color='secondary' component="div">
          ${(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small" component={Link} to={`/catalog/${product.id}`}> View</Button>
      </CardActions>
    </Card>
  );
}
