import React, { useState } from 'react';
import { LuUploadCloud } from "react-icons/lu";

const AdminAddItemsTab = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({
            productName,
            productDescription,
            productCategory,
            productPrice,
        });
    };

    return (
        <div className="max-w-md  p-4">
            <div className="flex items-center justify-center w-full mb-4">
                <label htmlFor="dropzone-file"
                       className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <LuUploadCloud />
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden"/>
                </label>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        id="product-name"
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="product-description" className="block text-sm font-medium text-gray-700">Product Description</label>
                    <textarea
                        id="product-description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="product-category" className="block text-sm font-medium text-gray-700">Product
                        Category</label>

                    <div className="relative mt-2 inline-block w-full max-w-full">
                        <select
                            className="block w-full p-1 px-2 bg-white border border-neutral-300 rounded-md shadow-sm appearance-none cursor-pointer focus:outline-none"
                            id="product-category"
                            defaultValue="" required
                        >
                            <option value="">Select category</option>
                            <option value="electronics">Big stake</option>
                            <option value="fashion">Small stake</option>
                            <option value="home">Mid stake</option>
                        </select>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/7c85f2f28f11deec4164b6a41cc39df4d949b9472302009e1016bde8425ceaf6?apiKey=0e60d26ffe404316aa35b6241738714a&"
                            alt="Dropdown Icon"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                        />
                    </div>

                </div>

                <div>
                    <label htmlFor="product-price" className="block text-sm font-medium text-gray-700">Product
                        Price</label>
                    <input
                        id="product-price"
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        required
                    />
                </div>

                <div className="pt-4">
                    <button
                        className="group w-full relative h-12 text-sm font-medium mx-auto uppercase overflow-hidden rounded-md bg-[#FF4C24] px-20 text-neutral-50 transition">
                        <span>Add Product</span>
                        <div
                            className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminAddItemsTab;
