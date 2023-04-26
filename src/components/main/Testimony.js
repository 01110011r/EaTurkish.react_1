import 'react-bootstrap';
import './Testimony.css';



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from 'react-bootstrap/Card';



function TestimonyFun() {

    return (

        <
        div className = 'testimony-bg py-5' >






        <
        h4 className = 'text-capitalize  container' > testimony < /h4>

        <
        h2 className = 'text-capitalize  container' > happy customers < /h2>

        <
        div className = 'coment pt-3  container' >




        <
        Swiper modules = {
            [Navigation, Pagination, Scrollbar, A11y] }
        spaceBetween = { 50 }
        //   slidesPerView={ 3 }

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


        navigation pagination = {
            { clickable: true } }
        scrollbar = {
            { draggable: true } }
        onSwiper = {
            (swiper) => console.log(swiper) }
        onSlideChange = {
            () => console.log('slide change') }

        >
        <
        SwiperSlide className = 'testimony-bg d-flex justify-content-center mb-5' >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Body >
        <
        Card.Title className = "mb-2 text-capitalize" > maria < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card> <
        /SwiperSlide>


        <
        SwiperSlide className = 'testimony-bg d-flex justify-content-center mb-5' >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Body >
        <
        Card.Title className = "mb-2 text-capitalize" > maria < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card> <
        /SwiperSlide>



        <
        SwiperSlide className = 'testimony-bg d-flex justify-content-center mb-5' >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Body >
        <
        Card.Title className = "mb-2 text-capitalize" > maria < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card> <
        /SwiperSlide>



        <
        SwiperSlide className = 'testimony-bg d-flex justify-content-center mb-5' >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Body >
        <
        Card.Title className = "mb-2 text-capitalize" > maria < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card> <
        /SwiperSlide>



        <
        SwiperSlide className = 'testimony-bg d-flex justify-content-center mb-5' >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Body >
        <
        Card.Title className = "mb-2 text-capitalize" > maria < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card> <
        /SwiperSlide>



        <
        /Swiper>





        <
        /div>





        <
        /div>


    )


}

export default TestimonyFun;