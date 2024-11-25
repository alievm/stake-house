import React from "react";

const RegionSelector = ({ options, onChange }) => {
    return (
        <div className="relative mt-2 inline-block w-full max-w-xs">
            <select
                className="block w-full p-1 px-2 bg-white border border-neutral-300 rounded-md shadow-sm appearance-none cursor-pointer focus:outline-none"
                onChange={onChange}
                defaultValue=""
            >
                <option value="" disabled>
                    Region: Select Region
                </option>
                {options.map((region, index) => (
                    <option key={index} value={region}>
                        {region}
                    </option>
                ))}
            </select>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/7c85f2f28f11deec4164b6a41cc39df4d949b9472302009e1016bde8425ceaf6?apiKey=0e60d26ffe404316aa35b6241738714a&"
                alt="Dropdown Icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
        </div>
    );
};

export default RegionSelector;
