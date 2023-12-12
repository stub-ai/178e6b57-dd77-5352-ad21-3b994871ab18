import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base mt-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;