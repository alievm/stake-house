import * as React from "react";
import MenuCard from "./MenuCard";

const menuItems = [
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    },
    {
        title: "Large Steak",
        description: "Indulge in the finest cuts, grilled to perfection,and crafted with love",
        currentPrice: "12",
        originalPrice: "15",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/5d66bb26d20ef3d9447ff29ca875b7f658a1c97de950f2a05fa23f5acd0792c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
    }
];

function MenuSection() {
    return (
        <section className="mt-12 w-full  max-md:mt-10 max-md:max-w-full">
            <div className="grid w-full gap-6 grid-cols-4 ">
                {menuItems.map((item, index) => (
                    <MenuCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        currentPrice={item.currentPrice}
                        originalPrice={item.originalPrice}
                        imageSrc={item.imageSrc}
                    />
                ))}
            </div>
        </section>
    );
}

export default MenuSection;