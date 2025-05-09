import { Link } from "react-router-dom";

const CategoryCard = ({ title, image, link }) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-4 transition-all duration-300 group overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {/* Title Overlay with Glass Effect */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg font-semibold text-[#244D61] px-5 py-2 rounded-xl backdrop-blur-md bg-white/50 shadow-lg">
            {title}
          </div>
        </div>

        {/* Explore Button */}
        <Link
          to={link}
          className="block bg-[#5689C0] text-white text-center font-medium py-3 rounded-b-2xl transition-all duration-300 hover:bg-[#244D61] relative group/button"
        >
          <span className="inline-block relative group-hover/button:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">
            Explore {title} →
          </span>
        </Link>
      </div>
    </>
  );
};
export default CategoryCard;
