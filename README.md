# 🛍️ E-Commerce MERN Application

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring product browsing, filtering, search functionality, and a modern, responsive UI.

## 🌐 Live Demo

- **Frontend**: [https://ecommerce-mern-roan.vercel.app](https://ecommerce-mern-roan.vercel.app)
- **Backend API**: [https://ecommerce-mern-3xht.onrender.com](https://ecommerce-mern-3xht.onrender.com)

## ✨ Features

### Frontend
- 🎨 **Modern UI/UX** - Beautiful gradient designs with smooth animations
- 🔍 **Advanced Search** - Real-time product search with suggestions
- 🎯 **Smart Filtering** - Filter by category, price range, and ratings
- 📊 **Sorting Options** - Sort products by price (ascending/descending) and ratings
- 📄 **Pagination** - Efficient product browsing with pagination
- 💝 **Wishlist** - Add products to favorites
- 🛒 **Shopping Cart** - Add to cart functionality
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with React and Vite

### Backend
- 🔐 **RESTful API** - Well-structured API endpoints
- 📦 **MongoDB Integration** - Efficient data storage with Mongoose
- 🖼️ **Image Upload** - Product image handling with Multer
- 🌐 **CORS Enabled** - Secure cross-origin resource sharing
- 🔄 **Data Seeding** - Pre-populated sample products

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
E-commerce-mini/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   └── ProductControllers.js  # Product logic
│   ├── middleware/
│   │   └── upload.js          # Multer configuration
│   ├── models/
│   │   └── productModel.js    # Product schema
│   ├── routes/
│   │   └── ProductRoutes.js   # API routes
│   ├── uploads/               # Uploaded images
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point
│   ├── seed.js                # Database seeding
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductsDash.jsx
    │   │   ├── SearchBar.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Pagination.jsx
    │   ├── context/
    │   │   └── FilterContext.jsx  # Global state
    │   ├── pages/
    │   │   └── AddProduct.jsx
    │   ├── services/
    │   │   └── api.js         # API calls
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Viswajith2003/Ecommerce-mern.git
   cd Ecommerce-mern
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Create `.env` file in backend folder**
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=5001
   FRONTEND_URL=http://localhost:5173
   ```

4. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

5. **Start the backend server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

6. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

7. **Update API URL in `frontend/src/services/api.js`**
   ```javascript
   const API_URL = "http://localhost:5001/api/products";
   ```

8. **Start the frontend**
   ```bash
   npm run dev
   ```

9. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📡 API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product (with image upload) |

### Example API Response
```json
[
  {
    "_id": "6968cf4dae21dd9642fbc113",
    "title": "Smart Watch Pro",
    "description": "Advanced fitness tracking...",
    "category": "Electronics",
    "price": 199.99,
    "rating": 4.7,
    "discount": 20,
    "image": "https://images.unsplash.com/...",
    "createdAt": "2026-01-15T11:28:13.798Z",
    "updatedAt": "2026-01-15T11:28:13.798Z"
  }
]
```

## 🎨 Features in Detail

### Product Filtering
- **Category Filter**: Electronics, Fashion, Beauty, Sports
- **Price Range**: Adjustable slider from $0 to max price
- **Sort Options**: Featured, Price (Low to High), Price (High to Low), Highest Rated

### Search Functionality
- Real-time search as you type
- Searches through product titles
- Instant results display

### Pagination
- Configurable products per page
- Previous/Next navigation
- Page number display

## 🌐 Deployment

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set **Root Directory** to `backend`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `npm start`
6. Add environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `FRONTEND_URL`: Your frontend URL (Vercel URL)

### Frontend (Vercel)
1. Import your GitHub repository to Vercel
2. Set **Root Directory** to `frontend`
3. Set **Build Command** to `npm run build`
4. Set **Output Directory** to `dist`
5. Deploy!

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5001
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Frontend
Update the API URL in `src/services/api.js`:
```javascript
const API_URL = "https://your-backend-url.onrender.com/api/products";
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Viswajith**
- GitHub: [@Viswajith2003](https://github.com/Viswajith2003)

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI inspiration from modern e-commerce platforms

## 📧 Contact

For any queries or suggestions, feel free to reach out!

---

⭐ **Star this repository if you found it helpful!** ⭐
