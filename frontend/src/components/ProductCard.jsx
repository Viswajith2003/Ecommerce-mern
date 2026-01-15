import React, { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductCard({ product = {} }) {
  const {
    image,
    category = "Category",
    title = "Premium Product Title",
    description = "Discover amazing features and quality craftsmanship in this exceptional product.",
    rating = 4.5,
    price = 99,
    originalPrice,
    discount,
  } = product;

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const discountPercent = discount || (originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  // Fallback image URL
  const fallbackImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop";
  
  // Construct full image URL for backend images
  const getImageUrl = (imagePath) => {
    if (!imagePath) return fallbackImage;
    // If it's already a full URL (starts with http), use it as is
    if (imagePath.startsWith('http')) return imagePath;
    // Otherwise, prepend the backend URL
    return `https://ecommerce-mern-3xht.onrender.com${imagePath}`;
  };
  
  const displayImage = imageError ? fallbackImage : getImageUrl(image);

  return (
    <article className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 w-full max-w-sm border border-gray-100">
      {/* Image Container */}
      <div className="relative w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={displayImage}
          alt={title}
          onError={() => setImageError(true)}
          className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            {discountPercent}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-300 group/wishlist"
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <AiFillHeart className="w-5 h-5 text-red-500" />
          ) : (
            <AiOutlineHeart className="w-5 h-5 text-gray-600 group-hover/wishlist:text-red-500" />
          )}
        </button>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <AiOutlineShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
          {category}
        </p>
        
        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => {
              if (i < fullStars) {
                return <AiFillStar key={i} className="w-4 h-4 text-yellow-400" />;
              } else if (i === fullStars && hasHalfStar) {
                return (
                  <div key={i} className="relative">
                    <AiOutlineStar className="w-4 h-4 text-yellow-400" />
                    <AiFillStar className="w-4 h-4 text-yellow-400 absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                  </div>
                );
              } else {
                return <AiOutlineStar key={i} className="w-4 h-4 text-gray-300" />;
              }
            })}
          </div>
          <span className="text-sm font-medium text-gray-600">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <button className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl transition-all duration-300 hover:scale-110 group/cart">
            <AiOutlineShoppingCart className="w-5 h-5 text-indigo-600 group-hover/cart:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
