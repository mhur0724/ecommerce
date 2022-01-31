import "./App.css";
import Home from "./components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Graphics from "./GraphicsSection/Graphics";
import LookBook from "./LookBookSection/LookBook";
import Store from "./StorePage/components/Store";
import FAQ from "./components/FAQPage/FAQ";
import Footer from "./components/Footer";
import Product from "./ProductPage/Product";
import { bestSellers } from "./components/data";
import { storeItems } from "./StorePage/components/StoreData";
import StoreItemPage from "./StorePage/components/StoreItemPage";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Announcement />
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            {storeItems.map((product) => (
              <Route
                key={product.id}
                path={product.nav}
                element={
                  <StoreItemPage
                    key={product.id}
                    img={product.img}
                    product={product.product}
                    price={product.price}
                    sizing={product.sizing}
                    care={product.care}
                  />
                }
              />
            ))}
            {bestSellers.map((product) => (
              <Route
                key={product.id}
                path={product.nav}
                element={
                  <Product
                    key={product.id}
                    img={product.img}
                    product={product.product}
                    price={product.price}
                    sizing={product.sizing}
                    care={product.care}
                  />
                }
              />
            ))}
            <Route path="/graphics" element={<Graphics />} />
            <Route path="/lookbook" element={<LookBook />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
