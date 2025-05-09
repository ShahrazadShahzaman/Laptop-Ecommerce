import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // ProductCard Start
  return (
    <>
     <div className="group rounded-xl overflow-hidden transition-transform duration-300 bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.09]">
      <div className="flex flex-col justify-between h-full p-3 text-center">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-contain mb-3 transition-transform duration-300 group-hover:scale-125"
          />
          <h3 className="text-base font-semibold text-[#244D61]">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{product.specs}</p>

          <div className="mt-2 flex justify-center items-center gap-1 text-[#FFA500]">
            <Star className="w-4 h-4 fill-[#FFA500]" />
            <span className="text-sm text-gray-700">{product.rating}</span>
          </div>

          <div className="mt-1 text-[#5689C0] font-semibold text-md">
            ${product.price}
          </div>
        </Link>

        <Link
          to={`/product/${product.id}`}
          className="mt-2 text-sm text-white bg-[#5689C0] px-10 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:bg-[#244D61] hover:shadow-[0_0_10px_#5689C0]"
        >
          Read More
        </Link>
      </div>
    </div>
    </>
  );
};
export default ProductCard;
