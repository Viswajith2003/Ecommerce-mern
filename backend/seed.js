import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductModel from "./models/productModel.js";
import ConnectDB from "./config/db.js";

dotenv.config();


const sampleProducts = [
  // Electronics (4 products)
  {
    title: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life and superior sound quality.",
    category: "Electronics",
    price: 89.99,
    rating: 4.5,
    discount: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
  },
  {
    title: "Smart Watch Pro",
    description: "Advanced fitness tracking, heart rate monitor, and smartphone notifications on your wrist.",
    category: "Electronics",
    price: 199.99,
    rating: 4.7,
    discount: 20,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
  },
  {
    title: "4K Ultra HD Camera",
    description: "Professional-grade camera with 24MP sensor and 4K video recording capabilities.",
    category: "Electronics",
    price: 599.99,
    rating: 4.8,
    discount: 10,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop"
  },
  {
    title: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with 360-degree sound and 12-hour battery life.",
    category: "Electronics",
    price: 49.99,
    rating: 4.3,
    discount: 25,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"
  },

  // Fashion (4 products)
  {
    title: "Classic Leather Jacket",
    description: "Genuine leather jacket with premium stitching and timeless design.",
    category: "Fashion",
    price: 249.99,
    rating: 4.7,
    discount: 30,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop"
  },
  {
    title: "Designer Sunglasses",
    description: "UV-protected polarized lenses with stylish metal frame.",
    category: "Fashion",
    price: 129.99,
    rating: 4.4,
    discount: 15,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
  },
  {
    title: "Premium Denim Jeans",
    description: "Comfortable stretch denim with modern slim fit and durable construction.",
    category: "Fashion",
    price: 79.99,
    rating: 4.5,
    discount: 20,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop"
  },
  {
    title: "Casual Sneakers",
    description: "Lightweight and breathable sneakers perfect for everyday wear.",
    category: "Fashion",
    price: 89.99,
    rating: 4.6,
    discount: 0,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop"
  },

  // Beauty (4 products)
  {
    title: "Anti-Aging Serum",
    description: "Powerful vitamin C serum that reduces wrinkles and brightens skin.",
    category: "Beauty",
    price: 39.99,
    rating: 4.7,
    discount: 10,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop"
  },
  {
    title: "Luxury Perfume Set",
    description: "Premium fragrance collection with floral and woody notes.",
    category: "Beauty",
    price: 149.99,
    rating: 4.9,
    discount: 15,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop"
  },
  {
    title: "Professional Makeup Brush Set",
    description: "12-piece professional makeup brush set with synthetic bristles.",
    category: "Beauty",
    price: 59.99,
    rating: 4.5,
    discount: 20,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop"
  },
  {
    title: "Organic Face Mask Kit",
    description: "Natural clay masks for deep cleansing and skin rejuvenation.",
    category: "Beauty",
    price: 29.99,
    rating: 4.4,
    discount: 0,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop"
  },

  // Sports (4 products)
  {
    title: "Yoga Mat Premium",
    description: "Extra-thick non-slip yoga mat with carrying strap.",
    category: "Sports",
    price: 34.99,
    rating: 4.5,
    discount: 15,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop"
  },
  {
    title: "Adjustable Dumbbells Set",
    description: "Space-saving adjustable dumbbells from 5 to 52.5 lbs.",
    category: "Sports",
    price: 299.99,
    rating: 4.8,
    discount: 10,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop"
  },
  {
    title: "Running Shoes Pro",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh.",
    category: "Sports",
    price: 129.99,
    rating: 4.7,
    discount: 25,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
  },
  {
    title: "Fitness Tracker Band",
    description: "Track your steps, calories, heart rate, and sleep patterns.",
    category: "Sports",
    price: 79.99,
    rating: 4.4,
    discount: 20,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop"
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    // Connect to database
    await ConnectDB();
    
    console.log("Clearing existing products...");
    await ProductModel.deleteMany({});
    
    console.log("🌱 Seeding database with sample products...");
    await ProductModel.insertMany(sampleProducts);
    
    console.log("Database seeded successfully!");
    console.log(`Added ${sampleProducts.length} products (4 per category)`);
    console.log("   - Electronics: 4 products");
    console.log("   - Fashion: 4 products");
    console.log("   - Beauty: 4 products");
    console.log("   - Sports: 4 products");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
