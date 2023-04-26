// import { Button } from 'bootstrap';
import '../main/OurSection.css';
import Card from 'react-bootstrap/Card';
import PizzaImg from '../assartiment/images/pizza.jpg';

function OurCards() {






    const myBtn = (params) => {
        return <button className = 'menu__btn px-4 py-2 text-capitalize bg-white m-2 ' > { params } < /button>;

    }

    return ( <
        div className = "menu py-5 container" >
        <
        h2 className = 'menu__h2 mb-4' > our regular menu pack < /h2>

        { myBtn('all') } { myBtn('Shawarma') } { myBtn('turk kebab') } { myBtn('hamburger kebab') } { myBtn('doner kebab') } { myBtn('shish kebab') } { myBtn('french fries pizza') } { myBtn('desserts') }


        <
        div className = 'menu__cards mt-4 d-flex justify-content-around align-items-center flex-wrap' >

        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 




        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 


        <
        Card style = {
            { width: '18rem' }
        }
        className = 'swiper-card' >
        <
        Card.Img variant = "top"
        src = { PizzaImg }
        /> <Card.Body> <
        Card.Title > Barbecue Shish kebab Shashlik Skewer < /Card.Title> <Card.Text className = 'card-text'> $12 .00 </Card.Text > < /Card.Body>  <
        /Card> 



        <
        /div>

        <
        /div>
    )
}

export default OurCards;