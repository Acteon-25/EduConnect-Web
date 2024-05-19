import React from "react";

const PricingCard = ({ plan, precio, caracteristicas, highlighted = false }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden p-6 ${highlighted ? "border-2 border-blue-500" : ""
        }`}
    >
      <h3 className="text-lg font-semibold text-gray-900">{plan}</h3>
      <p className="mt-2 text-4xl font-extrabold text-gray-900">{precio}</p>
      <ul className="mt-4 space-y-2">
        {caracteristicas.map((caracteristica) => (
          <li key={caracteristica} className="text-gray-600">
            {caracteristica}
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 block w-full py-2 px-4 rounded-md shadow bg-blue-500 hover:bg-blue-700 text-white ${highlighted ? "bg-blue-700 hover:bg-blue-900" : ""
          }`}
      >
        Elegir Plan
      </button>
    </div>
  );
};

export default PricingCard;
