import * as React from "react";

function FoodCategoryCard({ imageSrc, categoryName }) {
    return (
        <article className="flex flex-col">
            <img
                loading="lazy"
                src={imageSrc}
                alt={`${categoryName} category thumbnail`}
                className="object-contain aspect-square w-[90px]"
            />
            <h3 className="self-center mt-3.5">{categoryName}</h3>
        </article>
    );
}

export default FoodCategoryCard;