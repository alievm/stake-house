import * as React from "react";
import OrderCard from "./OrderCard";

const orders = [
    {
        id: 1,
        image: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/3a4c06e2a7db2ee758c4ff6bd4d2cc50cc034a6cbefcf01cbe6af23115845e5b?apiKey=0e60d26ffe404316aa35b6241738714a&",
        name: "Big Steak x3",
        price: "65.00",
        quantity: 2,
        status: "Food processing",
        statusColor: "#EF4444"
    },  {
        id: 1,
        image: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/3a4c06e2a7db2ee758c4ff6bd4d2cc50cc034a6cbefcf01cbe6af23115845e5b?apiKey=0e60d26ffe404316aa35b6241738714a&",
        name: "Big Steak x3",
        price: "65.00",
        quantity: 2,
        status: "Food processing",
        statusColor: "#EF4444"
    },  {
        id: 1,
        image: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/3a4c06e2a7db2ee758c4ff6bd4d2cc50cc034a6cbefcf01cbe6af23115845e5b?apiKey=0e60d26ffe404316aa35b6241738714a&",
        name: "Big Steak x3",
        price: "65.00",
        quantity: 2,
        status: "Food processing",
        statusColor: "#EF4444"
    },  {
        id: 1,
        image: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/3a4c06e2a7db2ee758c4ff6bd4d2cc50cc034a6cbefcf01cbe6af23115845e5b?apiKey=0e60d26ffe404316aa35b6241738714a&",
        name: "Big Steak x3",
        price: "65.00",
        quantity: 2,
        status: "Food processing",
        statusColor: "#EF4444"
    }
];

function OrdersList() {
    return (
        <section className="flex flex-col container mx-auto rounded-none">
            <h1 className="z-10 self-start -mt-2 text-3xl font-bold text-black">
                My orders
            </h1>
            <div className="mt-11 max-md:mt-10">
                {orders.map(order => (
                    <OrderCard
                        key={order.id}
                        image={order.image}
                        name={order.name}
                        price={order.price}
                        quantity={order.quantity}
                        status={order.status}
                        statusColor={order.statusColor}
                    />
                ))}
            </div>
        </section>
    );
}

export default OrdersList;