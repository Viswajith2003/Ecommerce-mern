const sampleProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Premium Wireless Headphones",
      description:
        "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation.",
      rating: 4.8,
      price: 199,
      originalPrice: 299,
      discount: 33,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Classic Analog Watch",
      description:
        "Timeless elegance meets modern craftsmanship in this stunning timepiece.",
      rating: 4.6,
      price: 149,
      originalPrice: 249,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Designer Sunglasses",
      description:
        "Protect your eyes in style with these premium UV-protection sunglasses.",
      rating: 4.7,
      price: 89,
      originalPrice: 159,
      discount: 44,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Athletic Running Shoes",
      description:
        "Engineered for performance with superior cushioning and breathable materials.",
      rating: 4.9,
      price: 129,
      originalPrice: 189,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Instant Camera",
      description:
        "Capture and print your memories instantly with this retro-style camera.",
      rating: 4.5,
      price: 99,
      originalPrice: 149,
      discount: 34,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Luxury Skincare Set",
      description:
        "Premium skincare essentials for radiant, healthy-looking skin.",
      rating: 4.8,
      price: 79,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Wireless Keyboard",
      description:
        "Sleek, ergonomic design with responsive keys for comfortable typing.",
      rating: 4.4,
      price: 69,
      originalPrice: 99,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Leather Backpack",
      description:
        "Handcrafted genuine leather backpack with modern functionality.",
      rating: 4.7,
      price: 159,
      originalPrice: 229,
      discount: 31,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Smart Watch Pro",
      description:
        "Advanced fitness tracking with heart rate monitor and GPS.",
      rating: 4.9,
      price: 299,
      originalPrice: 399,
      discount: 25,
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Training Sneakers",
      description:
        "Lightweight and durable sneakers perfect for gym workouts.",
      rating: 4.6,
      price: 95,
      originalPrice: 140,
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Organic Face Cream",
      description:
        "Natural ingredients for deep moisturizing and anti-aging.",
      rating: 4.7,
      price: 45,
      originalPrice: 65,
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Denim Jacket",
      description:
        "Classic blue denim jacket with modern slim fit.",
      rating: 4.5,
      price: 89,
      originalPrice: 129,
      discount: 31,
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Laptop Stand",
      description:
        "Ergonomic aluminum stand for better posture and cooling.",
      rating: 4.4,
      price: 49,
      originalPrice: 79,
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Yoga Mat Premium",
      description:
        "Extra thick non-slip yoga mat with carrying strap.",
      rating: 4.8,
      price: 39,
      originalPrice: 59,
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Hair Styling Kit",
      description:
        "Professional-grade styling tools for salon-quality results.",
      rating: 4.6,
      price: 119,
      originalPrice: 179,
      discount: 34,
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Canvas Sneakers",
      description:
        "Comfortable casual sneakers for everyday wear.",
      rating: 4.3,
      price: 55,
      originalPrice: 85,
    },
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Bluetooth Speaker",
      description:
        "Portable waterproof speaker with 360° sound.",
      rating: 4.7,
      price: 79,
      originalPrice: 119,
      discount: 34,
    },
    {
      id: 18,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Gym Duffel Bag",
      description:
        "Spacious sports bag with separate shoe compartment.",
      rating: 4.5,
      price: 65,
      originalPrice: 95,
    },
    {
      id: 19,
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Makeup Brush Set",
      description:
        "12-piece professional makeup brush collection.",
      rating: 4.8,
      price: 59,
      originalPrice: 89,
    },
    {
      id: 20,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Wool Scarf",
      description:
        "Soft merino wool scarf in multiple colors.",
      rating: 4.6,
      price: 35,
      originalPrice: 55,
    },
    {
      id: 21,
      image:
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "USB-C Hub",
      description:
        "7-in-1 multiport adapter with HDMI and card readers.",
      rating: 4.5,
      price: 45,
      originalPrice: 69,
    },
    {
      id: 22,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Resistance Bands Set",
      description:
        "5-piece resistance band set for strength training.",
      rating: 4.7,
      price: 29,
      originalPrice: 49,
    },
    {
      id: 23,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Perfume Collection",
      description:
        "Set of 3 premium fragrances for different occasions.",
      rating: 4.9,
      price: 149,
      originalPrice: 219,
      discount: 32,
    },
    {
      id: 24,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Leather Belt",
      description:
        "Genuine leather belt with reversible buckle.",
      rating: 4.4,
      price: 49,
      originalPrice: 75,
    },
    {
      id: 25,
      image:
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Webcam HD",
      description:
        "1080p webcam with auto-focus and noise reduction.",
      rating: 4.6,
      price: 89,
      originalPrice: 129,
    },
    {
      id: 26,
      image:
        "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Water Bottle Insulated",
      description:
        "Keeps drinks cold for 24h or hot for 12h.",
      rating: 4.8,
      price: 35,
      originalPrice: 50,
    },
    {
      id: 27,
      image:
        "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500&h=500&fit=crop",
      category: "Beauty",
      title: "Nail Polish Set",
      description:
        "10 trendy colors with long-lasting formula.",
      rating: 4.5,
      price: 39,
      originalPrice: 59,
    },
    {
      id: 28,
      image:
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&h=500&fit=crop",
      category: "Fashion",
      title: "Baseball Cap",
      description:
        "Adjustable cotton cap with embroidered logo.",
      rating: 4.3,
      price: 25,
      originalPrice: 40,
    },
    {
      id: 29,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      category: "Electronics",
      title: "Phone Case Premium",
      description:
        "Military-grade drop protection with wireless charging.",
      rating: 4.7,
      price: 39,
      originalPrice: 59,
    },
    {
      id: 30,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop",
      category: "Sports",
      title: "Running Armband",
      description:
        "Sweat-resistant phone holder for workouts.",
      rating: 4.4,
      price: 19,
      originalPrice: 29,
    },
  ];

export default sampleProducts;