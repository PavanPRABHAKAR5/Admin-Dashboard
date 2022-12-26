import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TopNav from "./components/NavBar-Top/TopNav";
import SideNav from "./components/NavBar-Side/SideNav";
import HomePage from "./Pages/HomePage/HomePage";
import ProductList from "./Pages/ProductList/ProductList";

function App() {
  return (
    <BrowserRouter>
    
      <TopNav />
      <div className="container">
        <SideNav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductList/>}/>
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
