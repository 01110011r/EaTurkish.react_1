import '../footer/Form.css';

import 'react-bootstrap';
import Card from 'react-bootstrap/Card';



function FormFun() {

    return ( <
        div className = 'form-parend pt-5 position-absolute' >

        <
        Card className = "bg-dark text-white py-5" >


        <
        h6 className = 'text-capitalize mb-2' >
        newsletter <
        /h6>

        <
        Card.Title className = 'py-3' > Subscribe to Our Newsletter < /Card.Title> <
        p >
        And never miss latest Updates!
        <
        /p>


        <
        form className = 'email d-flex flex-lg-row flex-column justify-content-center align-items-center ' >
        <
        input className = 'form__email m-2 rounded-pill py-2 px-4 bg-danger border-white text-white'
        type = 'email'
        placeholder = 'Email Address' / > < button className = 'form__btn m-2 rounded-pill py-2 px-4 border-white bg-danger text-white text-capitalize'
        type = 'submit' > submit < /button> <
        /form>



        <
        /Card>


        <
        /div>
    )




}

export default FormFun;