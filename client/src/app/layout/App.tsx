import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, createTheme } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/ConfigureStore";
import { setBasket } from "../../features/basket/BasketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setloading] = useState(true);
 
  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
      .then(basket => dispatch(setBasket(basket)))
      .catch(error => console.log(error))
      .finally(() => setloading(false));
    }
    else{
      setloading(false);
    }
  },[dispatch]);


  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode? 'dark' : 'light'; 

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType=== 'light'? '#eaeaea' : '#121212'
      }
    }
})
function handleThemeChange() {
  setDarkMode(!darkMode);
} 

  if (loading) return <LoadingComponent message='initializing app...'/>;

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Outlet  />
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
