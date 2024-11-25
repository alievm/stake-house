import React from 'react';
import Footer from "./footer/Footer.jsx";
import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
