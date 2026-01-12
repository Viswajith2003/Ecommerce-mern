import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductsDash from "./components/ProductsDash";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col lg:flex-row max-w-[1920px] mx-auto">
        <Sidebar />
        <ProductsDash />
      </div>
    </div>
  );
}
