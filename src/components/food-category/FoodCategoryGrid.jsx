import * as React from "react";
import FoodCategoryCard from "./FoodCategoryCard";
import { motion } from "framer-motion";

const foodCategories = [
    { id: 1, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/09b3cbb6138603beb29d3c147ca6735f9f9fd806924ea12be8002b0cdeaeb807?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 2, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 3, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 4, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 5, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 6, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 7, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 8, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
    { id: 8, name: "Steaks", imageSrc: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/407812d1405e54f49285ba282cc4fe2d9703ab7bd875f1ace02ee5855e427679?apiKey=0e60d26ffe404316aa35b6241738714a&" },
];

function FoodCategoryGrid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            className="flex flex-wrap max-w-6xl gap-9 mt-12 text-xl leading-none text-center whitespace-nowrap text-neutral-500 max-md:mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {foodCategories.map((category) => (
                <motion.div key={category.id} variants={childVariants}>
                    <FoodCategoryCard
                        imageSrc={category.imageSrc}
                        categoryName={category.name}
                    />
                </motion.div>
            ))}
        </motion.section>
    );
}

export default FoodCategoryGrid;