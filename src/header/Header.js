import React from 'react';
import Head from './head';
import Navbar from './Navbar';
import Search from './search';
import './Header.css';

const Header = () => {
    return (
        <>
            <Head />
            <Search />
            <Navbar />

        </>

    );
}

export default Header;
