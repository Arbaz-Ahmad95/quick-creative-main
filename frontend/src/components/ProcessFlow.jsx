import React from 'react';

export default function ConnectedButtons() {
  return (
    <div className="flex  w-full  justify-center items-center  p-8">
      <div className="relative flex items-center gap-16">
        {/* Strategy Button */}
        <div className="relative">
          <button className="px-8 py-3 border-2 border-green-500 rounded-full bg-white text-gray-800 font-medium hover:bg-green-50 transition-colors">
            Strategy
          </button>
        </div>

        {/* Creative Button with top arc */}
        <div className="relative">
          {/* Arc connecting Strategy to Creative (top) */}
          <svg
            className="absolute -left-40 -top-20"
            width="250"
            height="80"
            viewBox="0 0 128 60"
            fill="none"
          >
            <path
              d="M 0 60 Q 64 0, 128 60"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
            />
          </svg>
          
          <button className="px-8 py-3 border-2 border-green-500 rounded-full bg-white text-gray-800 font-medium hover:bg-green-50 transition-colors">
            Creative
          </button>
        </div>

        {/* Development Button with bottom arc */}
        <div className="relative">
          {/* Arc connecting Creative to Development (bottom) */}
          <svg
            className="absolute -left-42 top-13"
            width="290"
            height="80"
            viewBox="0 0 128 60"
            fill="none"
          >
            <path
              d="M 0 0 Q 64 60, 128 0"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
            />
          </svg>
          
          <button className="px-8 py-3 border-2 border-green-500 rounded-full bg-white text-gray-800 font-medium hover:bg-green-50 transition-colors">
            Development
          </button>
        </div>

        {/* Marketing Button with top arc */}
        <div className="relative">
          {/* Arc connecting Development to Marketing (top) */}
          <svg
            className="absolute -left-50 -top-20"
            width="280"
            height="80"
            viewBox="0 0 128 60"
            fill="none"
          >
            <path
              d="M 0 60 Q 64 0, 128 60"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
            />
          </svg>
          
          <button className="px-8 py-3 border-2 border-green-500 rounded-full bg-white text-gray-800 font-medium hover:bg-green-50 transition-colors">
            Marketing
          </button>
        </div>
      </div>
    </div>
  );
}