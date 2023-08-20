import { DarkMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Toolbar,
  Switch,
  ListItem,
  List,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { path: "/catalog", title: "catalog" },
  { path: "/about", title: "about" },
  { path: "/contact", title: "contact" },
];

const rightLinks = [
  { path: "/login", title: "login" },
  { path: "/register", title: "register" },
];

const midlinksStyle = {
  typography: "h6",
  color: "inherit",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography
            variant="h6"
            component={NavLink}
            to={"/"}
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ path, title }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={midlinksStyle}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ path, title }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ typography: "h6", color: "inherit" }}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
