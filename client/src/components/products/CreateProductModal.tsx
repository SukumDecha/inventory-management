import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../shared/Header";
import { IProductFormData } from "@/types";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: IProductFormData) => void;
}

const CreateProductModal = ({ isOpen, onClose, onCreate }: IProps) => {
  const [formData, setFormData] = useState<IProductFormData>({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseInt(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent page reloading
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const labelStyles = "block text-sm font-medium text-gray-700";
  const inputStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          {/* PRODUCT NAME  */}
          <label htmlFor="productName" className={labelStyles}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            value={formData.name}
            className={inputStyles}
          />

          {/* PRICE  */}
          <label htmlFor="productName" className={labelStyles}>
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
            className={inputStyles}
          />

          {/* STOCK QUANTITY  */}
          <label htmlFor="stockQuantity" className={labelStyles}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="StockQuantity"
            onChange={handleChange}
            value={formData.stockQuantity}
            className={inputStyles}
          />

          {/* RATING  */}
          <label htmlFor="rating" className={labelStyles}>
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
            value={formData.rating}
            className={inputStyles}
          />

          {/* CREATE ACTIONS */}
          {/* CREATE ACTIONS */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
          <button
            onClick={onClose}
            type="button"
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
