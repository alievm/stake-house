import React from 'react';
import {Link} from "react-router-dom";

const InfoPage = () => {
    return (
        <div className="container mx-auto flex flex-col p-6">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center text-3xl font-bold text-black mb-8">
                <h1 className="max-w-[910px]">Delivery Information</h1>
                <h1>Cart Totals</h1>
            </div>

            {/* Content Section */}
            <div className="flex  gap-10">
                {/* Delivery Information */}
                <div className="flex flex-col w-full lg:w-1/2 text-base text-neutral-600 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First name"
                            className="p-4 bg-white border rounded-md border-neutral-300"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="p-4 bg-white border rounded-md border-neutral-300"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="p-4 bg-white border rounded-md border-neutral-300"
                    />
                    <input
                        type="text"
                        placeholder="Street"
                        className="p-4 bg-white border rounded-md border-neutral-300"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="p-4 bg-white border rounded-md border-neutral-300"
                        />
                        <input
                            type="text"
                            placeholder="State"
                            className="p-4 bg-white border rounded-md border-neutral-300"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Zip code"
                            className="p-4 bg-white border rounded-md border-neutral-300"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="p-4 bg-white border rounded-md border-neutral-300"
                        />
                    </div>
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="p-4 bg-white border rounded-md border-neutral-300"
                    />
                </div>

                {/* Cart Totals */}
                <div className="flex flex-col w-full lg:w-1/2 text-lg text-neutral-700 space-y-4">
                    <div className="flex justify-between">
                        <span>Order Amount</span>
                        <span>$36</span>
                    </div>
                    <hr className="border-neutral-200"/>
                    <div className="flex justify-between">
                        <span>Quantity</span>
                        <span>3</span>
                    </div>
                    <hr className="border-neutral-200"/>
                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span>13.89%(+$5)</span>
                    </div>
                    <hr className="border-neutral-200"/>
                    <div className="flex justify-between">
                        <span>Region</span>
                        <span>Tashkent</span>
                    </div>
                    <hr className="border-neutral-200"/>
                    <div className="flex justify-between">
                        <span>Tax</span>
                        <span>13.89%(-$5)</span>
                    </div>
                    <hr className="border-neutral-200"/>
                    <div className="flex justify-between">
                        <span>Order date</span>
                        <span>11/16/2024</span>
                    </div>
                    <hr className="border-neutral-200"/>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$36</span>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold text-black mb-6">Select Payment Method</h2>
                <div className="flex items-center gap-4 p-4 bg-white border border-red-500 rounded-md">
                    <div className="w-5 h-5 border-[5px] border-red-500 rounded-full"/>
                    <span>COD (Cash On Delivery)</span>
                </div>
                <Link to="/track-orders">
                    <button
                        className="group relative h-12 font-medium mt-10 mx-auto uppercase overflow-hidden rounded-md bg-[#FF4C24] px-20 text-neutral-50 transition">
                        <span>place order</span>
                        <div
                            className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default InfoPage;
