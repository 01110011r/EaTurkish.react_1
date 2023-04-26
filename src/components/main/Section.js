import '../main/Section1.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import PizzaImg from '../assartiment/images/pizza.jpg';
import StarsImg from '../assartiment/images/stars.svg';





function oneSlide() {
    return (

        <
        div className = 'swiper-slide pb-5' >


        <
        h2 className = 'swiper-slide__title pt-5' > papular dishes < /h2>

        <
        Swiper className = 'container py-5 justify-content-center'

        modules = {
            [Navigation, Pagination, Scrollbar, A11y]
        }
        spaceBetween = { 50 }

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
            { clickable: true }
        }
        scrollbar = {
            { draggable: true }
        }
        onSwiper = {
            (swiper) => console.log(swiper)
        }
        onSlideChange = {
            () => console.log('slide change')
        } >




        <
        SwiperSlide className = 'swiper-slide-item d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <img src = { StarsImg }/ > < Card.Text className = 'card-text' > $12 .00 < /Card.Text> </Card.Body > < /Card>  <
        /SwiperSlide>



        <
        SwiperSlide className = 'swiper-slide-item d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <img src = { StarsImg }/ > < Card.Text className = 'card-text' > $12 .00 < /Card.Text> </Card.Body > < /Card> <
        /SwiperSlide>


        <
        SwiperSlide className = 'swiper-slide-item d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <img src = { StarsImg }/ > < Card.Text className = 'card-text' > $12 .00 < /Card.Text> </Card.Body > < /Card>  <
        /SwiperSlide>


        <
        SwiperSlide className = 'swiper-slide-item d-flex justify-content-center' >
        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body > <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <img src = { StarsImg }/ > < Card.Text className = 'card-text' > $12 .00 < /Card.Text> </Card.Body > < /Card> <
        /SwiperSlide>



        <
        /Swiper>  <
        /div>
    );
};

export default oneSlide;