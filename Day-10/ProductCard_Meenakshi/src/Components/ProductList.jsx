import React from "react";
import ProductCard from "./ProductCard";

// Import local images (match your filenames exactly)
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
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation",
    price: 99,
    image: headphonesImg,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your health and fitness",
    price: 149,
    image: smartwatchImg,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass",
    price: 79,
    image: speakerImg,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic design with RGB lighting",
    price: 59,
    image: mouseImg,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "Durable keys with customizable backlight",
    price: 129,
    image: keyboardImg,
  },
  {
    id: 6,
    name: "4K Monitor",
    description: "Ultra HD display for gaming and work",
    price: 299,
    image: monitorImg,
  },
  {
    id: 7,
    name: "Drone Camera",
    description: "Capture stunning aerial shots",
    price: 499,
    image: droneImg,
  },
  {
    id: 8,
    name: "DSLR Camera",
    description: "Professional photography gear",
    price: 899,
    image: dslrImg,
  },
  {
    id: 9,
    name: "VR Headset",
    description: "Immersive virtual reality experience",
    price: 399,
    image: vrImg,
  },
];

const ProductList = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
