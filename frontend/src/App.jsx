import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductsDash from "./components/ProductsDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";

export default function App() {
  return (
    

    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
        
          <Route
            path="/"
            element={
              <div className="flex flex-col lg:flex-row max-w-[1920px] mx-auto">
                <Sidebar />
                <main className="flex-1">
                  <ProductsDash />
                </main>
              </div>
            }
          />
         
          <Route
            path="/addProduct"
            element={
              <div className="max-w-[1920px] mx-auto">
                <AddProduct />
              </div>
            }
            />
        </Routes>
      </div>
    </Router>
            
  );
}
