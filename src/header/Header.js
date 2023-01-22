import React from 'react';
import Head from './head';
import Navbar from './navbar';
import Search from './search';

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
