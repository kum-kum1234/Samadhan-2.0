import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center w-full h-80">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="text-center mt-3 flex flex-col flex-grow">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
        <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
