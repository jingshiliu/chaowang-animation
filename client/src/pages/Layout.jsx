import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../components/Header'
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

function Layout() {
    return (
        <>
            <Header />
            <BackgroundImage />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;