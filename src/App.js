// import React from 'react';
import './App.css';
import NavScrollExample from './components/header/Header';

import OneSlide from './components/main/Section';
import OurCards from './components/main/OurSection';
import TestimonyFun from './components/main/Testimony';
import NewsFun from './components/main/News';
import IframeFun from './components/main/Iframe';
import PhotoFun from './components/main/PGallery';
import EndFun from './components/footer/FooterEnd';

function App() {
    return ( < div className = "App" >

        <
        NavScrollExample / >
        <
        OneSlide / >
        <
        OurCards / >
        <
        TestimonyFun / >
        <
        NewsFun / >
        <
        IframeFun / >
        <
        PhotoFun / >

        <
        EndFun / >

        <
        /div>
    );
}

export default App;