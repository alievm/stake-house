import React, {useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {FaSignOutAlt} from "react-icons/fa";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {ShoppingBagIcon} from "@heroicons/react/24/solid";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <>
            <div className="h-[100px] flex py-5 items-center justify-around">
                <img src="/logo.svg" alt="Logo"/>
                <div>
                    <ul className="flex gap-[45px] items-center justify-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `relative text-neutral-950 transition-colors duration-300 ${isActive ? 'text-[#fbbf24]' : 'hover:text-[#fbbf24]'}`
                                }
                            >
                                Home
                                {({isActive}) => isActive && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                className={({isActive}) =>
                                    `relative text-neutral-950 transition-colors duration-300 ${isActive ? 'text-[#fbbf24]' : 'hover:text-[#fbbf24]'}`
                                }
                            >
                                Menu
                                {({isActive}) => isActive && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({isActive}) =>
                                    `relative text-neutral-950 transition-colors duration-300 ${isActive ? 'text-[#fbbf24]' : 'hover:text-[#fbbf24]'}`
                                }
                            >
                                Statistics
                                {({isActive}) => isActive && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({isActive}) =>
                                    `relative text-neutral-950 transition-colors duration-300 ${isActive ? 'text-[#fbbf24]' : 'hover:text-[#fbbf24]'}`
                                }
                            >
                                Contact us
                                {({isActive}) => isActive && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="admin/settings"
                                className={({isActive}) =>
                                    `relative text-neutral-950 transition-colors duration-300 ${isActive ? 'text-[#fbbf24]' : 'hover:text-[#fbbf24]'}`
                                }
                            >
                                Admin Panel
                                {({isActive}) => isActive && (
                                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                                )}
                            </NavLink>
                        </li>
                    </ul>

                </div>
                <div>
                    <ul className="flex gap-[30px] items-center justify-center">
                        <li>
                            <MagnifyingGlassIcon className="h-[27px] w-[27px]"/>
                        </li>
                        <li className="relative">
                            <Link to="cart-page">
                                <ShoppingBagIcon className="h-[27px] w-[27px]"/>
                            </Link>
                            <span
                                className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                1
    </span>
                        </li>
                        <li>
                            <button
                                onClick={openModal}
                                className="group h-10 select-none rounded-lg bg-white px-5 text-sm text-zinc-950 border"
                            >
                <span className="flex gap-2 group-active:[transform:translate3d(0,1px,0)]">
                  <FaSignOutAlt strokeWidth="1.2" size="20"/>
                  Sign in
                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Модальное окно */}
            <Transition appear show={isModalOpen} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-30"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {isLogin ? "Login" : "Register"}
                                    </Dialog.Title>

                                    <div className="mt-4">
                                        {isLogin ? (
                                            // Логин
                                            <>
                                                <div className="flex flex-col gap-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Login"
                                                        className="border border-orange-300 appearance-none outline-none ring-0 rounded px-4 py-2"
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        className="border border-orange-300 appearance-none outline-none ring-0 rounded px-4 py-2"
                                                    />
                                                </div>
                                                <div className="mt-4 text-sm">
                                                    <p>
                                                        Don't have an account?{" "}
                                                        <span
                                                            onClick={() => setIsLogin(false)}
                                                            className="text-orange-600 cursor-pointer"
                                                        >
                              Register here
                            </span>
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            // Регистрация
                                            <>
                                                <div className="flex flex-col gap-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Login"
                                                        className="border border-orange-300 outline-none ring-0 rounded px-4 py-2"
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder="Email"
                                                        className="border border-orange-300 outline-none ring-0 rounded px-4 py-2"
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        className="border border-orange-300 outline-none ring-0 rounded px-4 py-2"
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Re-type Password"
                                                        className="border border-orange-300 rounded outline-none ring-0 px-4 py-2"
                                                    />
                                                </div>
                                                <div className="mt-4 text-sm">
                                                    <p>
                                                        Already have an account?{" "}
                                                        <span
                                                            onClick={() => setIsLogin(true)}
                                                            className="text-orange-600 cursor-pointer"
                                                        >
                              Login here
                            </span>
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Чекбокс соглашения */}
                                    <div className="mt-4">
                                        <label className="flex items-center gap-2 text-sm">
                                            <input type="checkbox" className="rounded border-gray-300"/>
                                            By continuing, i agree to the terms of use
                                            & privacy policy.
                                        </label>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="button"
                                            className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                                            onClick={closeModal}
                                        >
                                            {isLogin ? "Login" : "Register"}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Navbar;
