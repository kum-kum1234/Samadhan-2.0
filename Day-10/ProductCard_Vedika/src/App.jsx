import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155223f4f6?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 99.99,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1606813902916-df3b6a3f86d0?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 39.99,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1587202372775-98929c6731f5?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 89.99,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1590959651373-a3db1f02e7c0?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Sports Shoes",
      price: 79.99,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1528701800489-20be9c5e94e8?w=400&h=400&fit=crop",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("None");

  // Filter & sort logic
  let filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sort === "LowToHigh") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "HighToLow") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        🛍️ Product Card List
      </h1>

      {/* Search + Filter + Sort */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 w-64 focus:ring-2 focus:ring-pink-400 outline-none"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Fashion</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
        >
          <option value="None">Sort By</option>
          <option value="LowToHigh">Price: Low → High</option>
          <option value="HighToLow">Price: High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-400">{product.category}</p>
                <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-xl hover:from-red-500 hover:to-pink-500 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No products found 🧐
          </p>
        )}
      </div>
    </div>
  );
}
