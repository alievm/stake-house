import * as React from "react";
import {useState} from "react";
import {FiMinus, FiPlus} from "react-icons/fi";

const MenuCard = ({ title, description, currentPrice, originalPrice, imageSrc }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <article className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-5 w-full font-semibold bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1),0_15px_40px_rgba(0,0,0,0.01)] max-md:mt-9">
                <div className="flex relative flex-col items-end px-14 pt-44 pb-3.5 w-full rounded-2xl aspect-[1.207] max-md:pt-24 max-md:pl-5">
                    <img
                        loading="lazy"
                        src={imageSrc}
                        alt={`${title} dish`}
                        className="object-cover absolute inset-0 size-full"
                    />
                    {count === 0 ? (
                        // Button to add to cart
                        <div
                            className="flex absolute right-4 bottom-4 shrink-0 bg-white h-[41px] rounded-[50px] w-[41px] justify-center items-center cursor-pointer shadow-md hover:shadow-lg"
                            onClick={handleIncrement}
                        >
                            <FiPlus size={16} />
                        </div>
                    ) : (
                        // Counter with increment/decrement buttons
                        <div className="flex absolute right-4 bottom-4 bg-white h-[41px] rounded-[50px] px-2 items-center justify-between shadow-md">
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 transition-colors hover:bg-red-200"
                                onClick={handleDecrement}
                            >
                                <FiMinus className="text-red-500" size={16} />
                            </button>
                            <span className="mx-2 font-semibold text-gray-800">{count}</span>
                            <button
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 transition-colors hover:bg-green-200"
                                onClick={handleIncrement}
                            >
                                <FiPlus className="text-green-500" size={16} />
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-start px-6 mt-6 w-full max-md:pl-5">
                    <div className="flex gap-10 self-stretch text-xl leading-none  text-black">
                        <h3 className="w-full">{title}</h3>
                        <div className="flex max-w-max items-center">
                            <svg className="w-4 h-4 text-orange-600 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-orange-600 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-orange-600 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-orange-600 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 ms-1 text-gray-200 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                    </div>
                    <p className="mt-4 text-xs w-full text-zinc-500">
                        {description}
                    </p>
                    <div className="flex gap-2 mt-6 whitespace-nowrap">
    <span className="grow text-xl tracking-tighter leading-none text-orange-600">
        ${currentPrice}
    </span>
                        <span className="relative my-auto text tracking-tighter leading-none text-neutral-500">
        ${originalPrice}
                            <span
                                className="absolute inset-0 h-[1px] bg-orange-500 transform rotate-[-10deg] top-1/2"></span>
    </span>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default MenuCard;