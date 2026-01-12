import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsDash() {
  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Premium Wireless Headphones",
      description: "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation.",
      rating: 4.8,
      price: 199,
      originalPrice: 299,
      discount: 33
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Classic Analog Watch",
      description: "Timeless elegance meets modern craftsmanship in this stunning timepiece.",
      rating: 4.6,
      price: 149,
      originalPrice: 249,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Designer Sunglasses",
      description: "Protect your eyes in style with these premium UV-protection sunglasses.",
      rating: 4.7,
      price: 89,
      originalPrice: 159,
      discount: 44
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
      category: "Shoes",
      title: "Athletic Running Shoes",
      description: "Engineered for performance with superior cushioning and breathable materials.",
      rating: 4.9,
      price: 129,
      originalPrice: 189,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Instant Camera",
      description: "Capture and print your memories instantly with this retro-style camera.",
      rating: 4.5,
      price: 99,
      originalPrice: 149,
      discount: 34
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Luxury Skincare Set",
      description: "Premium skincare essentials for radiant, healthy-looking skin.",
      rating: 4.8,
      price: 79,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Wireless Keyboard",
      description: "Sleek, ergonomic design with responsive keys for comfortable typing.",
      rating: 4.4,
      price: 69,
      originalPrice: 99,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Leather Backpack",
      description: "Handcrafted genuine leather backpack with modern functionality.",
      rating: 4.7,
      price: 159,
      originalPrice: 229,
      discount: 31
    },
  ];

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 p-4 lg:p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Discover Amazing Products
        </h1>
        <p className="text-gray-600">
          Explore our curated collection of premium products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Load More Products
        </button>
      </div>
    </div>
  );
}
