import 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardImg from '../assartiment/images/paulhermannjeiqzOgwwKUunsplash.png';

function NewsFun() {

    return ( <
        div className = 'container py-5' >

        <
        h4 className = 'text-capitalize' > news < /h4>

        <
        h2 className = 'text-capitalize text-danger' > gericht updates < /h2>


        <
        div className = 'Cards d-flex justify-content-center flex-wrap justify-content-md-between' >


        <
        Card className = 'mt-3'
        style = {
            { width: '18rem' } } >
        <
        Card.Img variant = "top"
        src = { CardImg }
        /> <
        Card.Body >
        <
        Card.Title > Card Title < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card>



        <
        Card className = 'mt-3'
        style = {
            { width: '18rem' } } >
        <
        Card.Img variant = "top"
        src = { CardImg }
        /> <
        Card.Body >
        <
        Card.Title > Card Title < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card>



        <
        Card className = 'mt-3'
        style = {
            { width: '18rem' } } >
        <
        Card.Img variant = "top"
        src = { CardImg }
        /> <
        Card.Body >
        <
        Card.Title > Card Title < /Card.Title> <
        p >
        Some quick example text to build on the card title and make up the bulk of the card 's content. <
        /p>

        <
        /Card.Body> <
        /Card>







        <
        /div>


        <
        button className = 'btn text-capitalize borger-1 border-danger px-3 py-2 rounded-pill mt-4' > view more < /button>


        <
        /div>
    )


}



export default NewsFun;