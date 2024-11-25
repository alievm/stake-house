import React from 'react';
import Navbar from "../components/Navbar.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import {motion} from "framer-motion";
import FoodCategoryGrid from "../components/food-category/FoodCategoryGrid.jsx";
import MenuSection from "../components/food-menu-products/MenuSection.jsx";

const HomePage = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="max-w-7xl mx-auto w-full">
            <HeroCarousel/>
            <motion.section
                className="mt-10 text-sm max-w-2xl font-semibold leading-6 text-zinc-500 max-md:max-w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={fadeInVariants}
            >
                <motion.section
                    className="mt-14 text-4xl leading-none mb-6 text-neutral-800 max-md:mt-10"
                    variants={fadeInVariants}
                >
                    <h2>Explore Our Menu</h2>
                </motion.section>

                <motion.p variants={fadeInVariants}>
                    Indulge in the finest cuts, grilled to perfection, and crafted with love.
                    Our commitment is to bring you an unforgettable dining experience with
                    every bite. Whether you crave a classic steak, a juicy burger, or a fresh
                    salad, we have something for everyone.
                </motion.p>
            </motion.section>
            <FoodCategoryGrid/>
            <MenuSection/>
        </div>
    );
};

export default HomePage;
