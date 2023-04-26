import './PGallery.css';
import 'react-bootstrap';
// import 'react-bootstrap/Container';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Navigation, Pagination } from 'swiper';
import SwiperPhoto from '../assartiment/images/paulhermannjeiqzOgwwKUunsplash.png';

import Card from 'react-bootstrap/Card';

function PhotoFun() {


    return (


        <
        div className = 'photos photos-bg py-5' >

        <
        div className = 'container' >






        <
        div className = 'photos__swiper' >

        <
        Swiper

        modules = {
            [Navigation, Pagination] }


        spaceBetween = { 30 }
        breakpoints = {
            {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,

                }
            }
        }




        //  navigation pagination={{ clickable: true }}



        scrollbar = {
            { draggable: true } }
        onSwiper = {
            (swiper) => console.log(swiper) }
        onSlideChange = {
            () => console.log('slide change') }




        className = "mySwiper"

        >


        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5 border-0' >
        <
        div className = 'text d-flex flex-column align-items-center align-items-lg-start photos-bg' >


        <
        h4 className = 'text-capitalize' > instagram < /h4>

        <
        h2 className = 'text-capitalize' > photo gallery < /h2> <
        p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Volutpat mattis ipsum turpis elit elit scelerisque egestas mu. <
        /p>

        <
        button className = 'text-capitalize border-1 border-danger rounded-pill py-1 px-3' > view more < /button>

        <
        /div>

        <
        /Card> <
        /SwiperSlide>

        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5' >
        <
        Card.Img variant = "top"
        className = 'rounded-3'
        src = { SwiperPhoto }
        />

        <
        /Card> <
        /SwiperSlide>


        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5' >
        <
        Card.Img variant = "top"
        className = 'rounded-3'
        src = { SwiperPhoto }
        />

        <
        /Card> <
        /SwiperSlide>



        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5' >
        <
        Card.Img variant = "top"
        className = 'rounded-3'
        src = { SwiperPhoto }
        />

        <
        /Card> <
        /SwiperSlide>


        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5' >
        <
        Card.Img variant = "top"
        className = 'rounded-3'
        src = { SwiperPhoto }
        />

        <
        /Card> <
        /SwiperSlide>



        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5' >
        <
        Card.Img variant = "top"
        className = 'rounded-3'
        src = { SwiperPhoto }
        />

        <
        /Card> <
        /SwiperSlide>


        <
        SwiperSlide className = 'photos-bg d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' } }
        className = 'mb-5' >
        <
        Card.Img variant = "top"
        className = 'rounded-3'
        src = { SwiperPhoto }
        />

        <
        /Card> <
        /SwiperSlide>





        <
        /Swiper>


        <
        /div>

        <
        /div>


        <
        /div>




    )


}
export default PhotoFun;