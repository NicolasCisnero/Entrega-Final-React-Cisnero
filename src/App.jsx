import "./App.css";
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="main bg-body-secondary">
      <CartContextProvider>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/Categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/Item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} />
            <Route path={"/*"} element={<Error404 />} />             
          </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
export default App;
