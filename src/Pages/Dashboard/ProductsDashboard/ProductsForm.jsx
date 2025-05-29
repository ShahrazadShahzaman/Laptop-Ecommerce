import UploadImage from "../../../Components/UploadImage";

const ProductForm = ({
  form,
  handleChange,
  handleSubmit,
  handleUpload,
  editId,
}) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10 w-full">
      <h3 className="text-xl md:text-2xl font-semibold text-[#244D61] mb-6">
        {editId ? "Edit Product" : "Add New Product"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="e.g. Gaming, Business"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating out of 5"
            value={form.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>
<div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Discount (%)
          </label>
          <input
            type="number"
            name="discount"
            placeholder="e.g 20"
            value={form.discount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specs
          </label>
          <textarea
            name="specs"
            placeholder="List key specifications..."
            value={form.specs}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Short product description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#244D61]"
          />
        </div>

        

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image
          </label>
          <UploadImage onUpload={handleUpload} />
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="bg-[#244D61] text-white text-sm md:text-base font-medium px-6 py-2 rounded-lg hover:bg-[#1d3e4f] transition-all duration-300"
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </div>
    </div>
    </>
  );
};
export default ProductForm;
