import React from "react";
import OrderSummaryItem from "./OrderSummaryItem";
import CartItem from "./CartItem";
import RegionSelector from "../RegionSelector.jsx";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
const orderSummaryData = [
    { label: "Order Amount", value: "$36" },
    { label: "Quantity", value: "3" },
    { label: "Discount", value: "13.89% (+$5)" },
    { label: "Region", value: "Tashkent" },
    { label: "Tax", value: "13.89% (-$5)" },
    { label: "Order Date", value: "11/16/2024" },
];

const CartPage = () => {
    const regions = ["Tashkent", "Samarkand", "Bukhara", "Khiva"];

    const handleRegionChange = (event) => {
        console.log("Selected Region:", event.target.value);
    };

    return (
        <main className="mx-auto container  p-6 text-lg text-neutral-700">
            {/* Header */}
            <header className="grid grid-cols-6 text-center gap-4 pb-4 border-b border-neutral-200 text-zinc-500">
                <h2 className="font-semibold">Items</h2>
                <h2 className="font-semibold">Title</h2>
                <h2 className="font-semibold">Price</h2>
                <h2 className="font-semibold">Quantity</h2>
                <h2 className="font-semibold">Total</h2>
                <h2 className="font-semibold text-right">Remove</h2>
            </header>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: "easeOut"}}
            >
                <CartItem
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/710c604a8104283fee099b2d4ff6d6663a3829d676269a4a3d5523a066f0386a?apiKey=0e60d26ffe404316aa35b6241738714a&"
                    title="Big Steak"
                    price={12}
                    total="$36"
                />
            </motion.div>

            {/* Order Details */}
            <motion.section
                className="my-5"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
            >
                <h1 className="text-2xl font-bold">Order Details</h1>
                <p className="mt-4 text-neutral-600">
                    Order Date:{" "}
                    <span className="border text-[#555555] px-1">11/16/2024</span>
                </p>
                <RegionSelector options={regions} onChange={handleRegionChange}/>
            </motion.section>


            {/* Cart Totals */}
            <motion.section
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: "easeOut", delay: 0.4}}
            >
                <h1 className="text-2xl font-bold">Cart Totals</h1>
                <div className="mt-6 space-y-4">
                    {orderSummaryData.map((item, index) => (
                        <OrderSummaryItem key={index} label={item.label} value={item.value}/>
                    ))}
                </div>
                <div className="mt-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$36</span>
                </div>
            </motion.section>
            <Link to="/info-page">
                <button
                    className="group relative h-12 font-medium mt-10 mx-auto uppercase overflow-hidden rounded-md bg-[#FF4C24] px-20 text-neutral-50 transition">
                    <span>Submit</span>
                    <div
                        className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
                </button>
            </Link>

        </main>
    );
};

export default CartPage;
