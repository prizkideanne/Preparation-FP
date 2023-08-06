import React from "react";

function PropertyCard({ title, type, location, price }) {
  return (
    <div className="w-[700px] h-[200px] flex flex-row bg-white border border-gray-300 rounded-lg">
      <div className="flex shrink-0">
        <img
          src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
          alt="hotel"
          className="object-cover object-center h-full w-[350px] rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-between w-full px-5 py-4">
        {/* Property Info */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-start">
            <p className="capitalize font-bold text-xl">{title}</p>
            <p className="capitalize font-medium text-sm mb-3">{type}</p>
          </div>
          <p className="capitalize font-medium text-sm">{location}</p>
        </div>

        {/* Price */}
        <div className="flex items-end flex-col border-t pt-3">
          <p className="text-lg font-bold text-rose-500">{price}</p>
          <p className="text-xs">/night/room (tax included)</p>
        </div>
      </div>
    </div>
  );
}

PropertyCard.defaultProps = {
  title: "Hotel Sunset",
  type: "Hotel",
  location: "Jakarta Selatan",
  price: "Rp. 1.000.000",
};

export default PropertyCard;
