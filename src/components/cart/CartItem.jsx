import * as React from "react";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";

function CartItem({ imageSrc, title, price }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const numericPrice = Number(price);
    const total = numericPrice * count;

    return (
        <article className="flex gap-10 border-b border-gray-200 relative justify-around items-center py-4 w-full text-black max-md:max-w-full">
            <img
                loading="lazy"
                src={imageSrc}
                alt={title}
                className="object-contain shrink-0 self-start aspect-[1.73] w-[52px]"
            />
            <p className="self-stretch my-auto">{title}</p>
            <p className="self-stretch my-auto">{numericPrice.toFixed(2)}</p>
            <div
                className="flex bg-white border border-[#808080] h-[41px] rounded px-2 items-center justify-between ">
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-full "
                    onClick={handleDecrement}
                >
                    <FiMinus size={16} />
                </button>
                <span className="mx-2 font-semibold text-gray-800">{count}</span>
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    onClick={handleIncrement}
                >
                    <FiPlus size={16} />
                </button>
            </div>
            <p className="self-stretch my-auto">{total.toFixed(2)}</p>
            <button
                className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
                <div className="transition duration-300 group-hover:rotate-[360deg]">
                    <HiXMark className="text-white" />
                </div>
            </button>
        </article>
    );
}

export default CartItem;
