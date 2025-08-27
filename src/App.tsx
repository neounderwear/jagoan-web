import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductCatalog from "./pages/ProductCatalog";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/katalog" element={<ProductCatalog />} />
      <Route path="/produk/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
