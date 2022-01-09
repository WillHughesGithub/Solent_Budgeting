import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CategoryStore } from "./contexts/CategoryContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <CategoryStore>
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </CategoryStore>
      <Footer />
    </Router>
  );
}

export default App;
