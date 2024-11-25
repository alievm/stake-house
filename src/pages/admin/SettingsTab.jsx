import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaThList } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { IoFileTrayStacked } from "react-icons/io5";
import AdminAddItemsTab from "./AdminAddItemsTab.jsx";
import {HiMiniXMark} from "react-icons/hi2";

const SettingsTab = () => {
    const [activeTab, setActiveTab] = useState('addItems'); // Стейт для активного таба

    const renderContent = () => {
        switch (activeTab) {
            case 'addItems':
                return (
                    <motion.div
                        key="addItems"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                    >
                        <AdminAddItemsTab/>
                    </motion.div>
                );
            case 'listItems':
                return (
                    <motion.div
                        key="listItems"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.5 }}
                    >
                    <div className="flex flex-col text-sm max-w-[930px] text-neutral-500">
                        <div
                            className="flex flex-wrap gap-5 justify-between items-start px-12 py-3 w-full font-bold whitespace-nowrap border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-10">
                                <div>Image</div>
                                <div>Name</div>
                            </div>
                            <div className="flex gap-10">
                                <div>Category</div>
                                <div>Price</div>
                                <div>Action</div>
                            </div>
                        </div>
                        <div
                            className="flex z-10 flex-wrap gap-5 justify-between py-3.5 pr-20 pl-9 mt-0 w-full border border-solid bg-stone-50 border-stone-300 max-md:px-5 max-md:max-w-full">
                            <div className="flex gap-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/0acfa6ccbcff0143cd78f84859c6241208916a3b29397f915c09c23da18c572f?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    className="object-contain shrink-0 aspect-[1.08] w-[52px]"
                                />
                                <div className="my-auto">Big Steak</div>
                            </div>
                            <div className="flex gap-10 my-auto whitespace-nowrap">
                                <div>Classic</div>
                                <div>$12</div>
                                <button
                                    className="group flex h-8 w-8 select-none items-center justify-center rounded-lg bg-white leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]"
                                    aria-label="Change language"><span
                                    className="flex items-center group-active:[transform:translate3d(0,1px,0)]">
                                    <HiMiniXMark/>
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                );
            case 'orders':
                return (
                    <motion.div
                        key="orders"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                    <div className="flex flex-col max-w-[930px]">
                        <div className="z-10 self-start -mt-1.5 text-2xl font-bold text-neutral-500">
                            Order page
                        </div>
                        <div
                            className="flex gap-5 justify-between items-start px-8 pt-4 pb-7 mt-16 w-full text-base bg-white border border-yellow-700 border-solid text-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col self-stretch">
                                <div className="flex gap-5 justify-between max-w-full w-[198px]">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/947608e1875fb4259528a21535e89e1109299cd2f76e80779c2f7a7e21a609c2?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                        className="object-contain shrink-0 aspect-[0.83] w-[50px]"
                                    />
                                    <div className="my-auto">Big Steak x3</div>
                                </div>
                                <div className="flex flex-col self-end mt-3.5 max-w-full w-[207px]">
                                    <div className="self-start font-bold">Name Surname</div>
                                    <div className="mt-4">SteakHouseEmail, WhiteField</div>
                                    <div className="mt-2.5 max-md:mr-2">
                                        Columbus, OH , 12345, 12345
                                        <br/>
                                        <br/>
                                        1213456787899
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">Items: 2</div>
                            <div className="mt-5">$65.00</div>
                            <div className="relative mt-2 inline-block w-full max-w-xs">
                                <select
                                    className="block w-full p-1 px-2 bg-white border border-neutral-300 rounded-md shadow-sm appearance-none cursor-pointer focus:outline-none"
                                    id="product-category"
                                    defaultValue="" required
                                >
                                    <option value="">Food processing</option>
                                    <option value="electronics">Out for delivery</option>
                                    <option value="fashion">Delivered</option>
                                </select>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/7c85f2f28f11deec4164b6a41cc39df4d949b9472302009e1016bde8425ceaf6?apiKey=0e60d26ffe404316aa35b6241738714a&"
                                    alt="Dropdown Icon"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="md:flex mx-auto container h-screen">
                <ul className="flex-column w-1/4 space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                    <li className="w-full">
                        <button
                            onClick={() => setActiveTab('addItems')}
                            className={`flex gap-4 max-w-full w-full items-center px-4 py-3 rounded-lg ${
                                activeTab === 'addItems' ? 'text-white bg-orange-500' : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                            }`}
                        >
                            <MdCreateNewFolder size="25"/>
                            Add Items
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab('listItems')}
                            className={`flex gap-4 max-w-full w-full items-center px-4 py-3 rounded-lg ${
                                activeTab === 'listItems' ? 'text-white bg-orange-500' : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                            }`}
                        >
                            <IoFileTrayStacked size="25"/>
                            List Items
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`flex gap-4 max-w-full w-full items-center px-4 py-3 rounded-lg ${
                                activeTab === 'orders' ? 'text-white bg-orange-500' : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100'
                            }`}
                        >
                            <FaThList size="25"/>
                            Orders
                        </button>
                    </li>
                </ul>
                <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-full">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsTab;
