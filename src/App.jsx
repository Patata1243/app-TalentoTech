import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.page";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.page";
import { CartView } from "./components/Cart/CartView.page";
import { Home } from "./components/Home/Home.page";
import { Sales } from "./components/Sales/Sales.page";
import { Contact } from "./components/Contact/Contact.page";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/product/:category" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
