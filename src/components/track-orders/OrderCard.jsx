import * as React from "react";

function OrderCard({ image, name, price, quantity, status, statusColor }) {
    return (
        <article
            className="flex flex-wrap gap-5 justify-between items-center px-10 py-7 w-full text-base bg-white border border-yellow-700  text-neutral-600 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-10 items-center justify-around w-full max-w-2xl max-md:max-w-full">
                <img
                    loading="lazy"
                    src={image}
                    alt={`${name} product image`}
                    className="object-contain shrink-0 self-stretch aspect-square w-[60px]"
                />
                <p className="self-stretch my-auto">{name}</p>
                <p className="self-stretch my-auto">${price}</p>
                <p className="self-stretch my-auto">Items: {quantity}</p>
            </div>
            <div className="flex gap-1.5 self-stretch my-auto">
                <div
                    className={`flex shrink-0 self-start mt-2 w-2 h-2 rounded-full`}
                    style={{backgroundColor: statusColor}}
                    role="status"
                    aria-label={status}
                />
                <p className="basis-auto">{status}</p>
            </div>
            <button
                className="px-6 py-2 bg-red-100 text-red-700 font-medium rounded hover:bg-red-200 transition"
                onClick={() => {
                }}
                tabIndex={0}
            >
                Track Order
            </button>
        </article>
    );
}

export default OrderCard;