import * as React from "react";

function OrderSummaryItem({ label, value }) {
    return (
        <div className="flex flex-wrap gap-5 justify-between border-b border-gray-200 mt-3.5 w-full whitespace-nowrap  max-md:max-w-full">
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );
}

export default OrderSummaryItem;