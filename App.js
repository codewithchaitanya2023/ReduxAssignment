import Nvavbar from "./component/Nvavbar";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart"; // Import the Cart component
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nvavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
