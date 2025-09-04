
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./Component/Navber/Navbar.jsx";
import Homepage from "./Pages/Home/Home.jsx";
import Aboutpage from "./Pages/About/About.jsx";
import Sell from "./Pages/Onsell/Onsell.jsx";
import Shoppage from "./Pages/Shop/Shop.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import CartPage from "./Component/CartPags.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/onsell" element={<Sell />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
