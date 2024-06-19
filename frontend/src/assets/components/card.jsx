import React from 'react';
import book from '../../../public/book.png';

export default function Card({ title, category, price }) {
  return (
    <div className="w-80 h-96  shadow-xl overflow-hidden">
      <div className="flex justify-center items-center h-48">
        <img src={book} alt={title} className="max-h-full max-w-full" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">
          {title}
          <div className="badge badge-secondary ml-2">{category}</div>
        </h2>
        <p className="mt-2">If a dog chews shoes whose shoes does he choose?</p>
        <div className="mt-4 flex justify-between">
          <div className="badge badge-outline">Price: {price}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}
