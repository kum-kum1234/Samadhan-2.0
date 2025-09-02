import React from "react";

// Product Images
import headphonesImg from "../assets/products/headphones.jpg";
import smartwatchImg from "../assets/products/smartwatch.jpg";
import speakerImg from "../assets/products/bluetoothspeaker.jpg";
import mouseImg from "../assets/products/GamingMouse.jpg";
import keyboardImg from "../assets/products/MachanicalKeyboard.jpg";
import monitorImg from "../assets/products/4K_monitor.jpg";
import droneImg from "../assets/products/drone_camera.jpg";
import dslrImg from "../assets/products/DSLR_camera.jpg";
import vrImg from "../assets/products/VR_headset.jpg";

const products = [
  { id: 1, name: "Wireless Headphones", description: "High-quality sound with noise cancellation", price: "₹7,999", image: headphonesImg },
  { id: 2, name: "Smart Watch", description: "Track your health and fitness", price: "₹11,999", image: smartwatchImg },
  { id: 3, name: "Bluetooth Speaker", description: "Portable speaker with deep bass", price: "₹5,999", image: speakerImg },
  { id: 4, name: "Gaming Mouse", description: "Ergonomic design with RGB lighting", price: "₹4,499", image: mouseImg },
  { id: 5, name: "Mechanical Keyboard", description: "Durable keys with customizable backlight", price: "₹9,999", image: keyboardImg },
  { id: 6, name: "4K Monitor", description: "Ultra HD display for gaming and work", price: "₹24,999", image: monitorImg },
  { id: 7, name: "Drone Camera", description: "Capture stunning aerial shots", price: "₹39,999", image: droneImg },
  { id: 8, name: "DSLR Camera", description: "Professional photography gear", price: "₹74,999", image: dslrImg },
  { id: 9, name: "VR Headset", description: "Immersive virtual reality experience", price: "₹32,999", image: vrImg },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-blue-200 p-10">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Our Products
      </h1>

      {/* Grid layout for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center
                       transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Square product image */}
            <div className="w-48 h-48 mt-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Card content - centered */}
            <div className="p-4 flex flex-col items-center text-center w-full">
              <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
              <p className="text-gray-700 text-sm mt-1">{product.description}</p>
              <p className="text-blue-700 font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
