import React from "react";
import DataAna from '../assets/images/DataAna.jpeg'
export default function DataAnalystSection() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <img
            src={DataAna}
            alt="Sales Overview Dashboard"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">
            Data analysist
          </h2>

          <p className="text-black text-lg leading-relaxed max-w-md">
            Data Analysis involves collecting, cleaning, and interpreting
            data to uncover insights, identify patterns, and support
            informed decision-making.
          </p>
        </div>

      </div>
    </div>
  );
}
