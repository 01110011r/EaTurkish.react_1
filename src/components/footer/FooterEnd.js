import './FooterEnd.css';
import 'react-bootstrap';
import FormFun from './Form';
import ETImg from '../assartiment/images/Eaturkish.svg';

import Fsvg from '../assartiment/images/Fsvg.svg';

function EndFun() {

    return (


        <
        div className = 'footer-block position-relative py-5' >


        <
        div className = 'container' >
        <
        FormFun / >




        <
        div className = 'd-flex flex-column flex-lg-row align-items-center justify-content-between text-white' >

        <
        div className = 'mt-5' >
        <
        h5 className = 'text-capitalize mb-3' > contact us < /h5> <
        span className = 'd-block' > 9 W 53 rd St, London, NY 10019, UK < /span>

        <
        span className = 'd-block' > +1 212 - 344 - 1230 < /span>

        <
        span className = 'd-block' > +1 212 - 555 - 1230 < /span>

        <
        /div>



        <
        div className = 'my-5' >
        <
        img src = { ETImg }
        alt = 'EaTurskish logo' / >
        <
        p className = 'py-4' >
        "The best way to find yourself is to lose yourself in the service of others.” <
        /p> <
        a >
        <
        img src = { Fsvg }
        alt = 'facebook logo' / >
        <
        /a> <
        a className = 'mx-4' >
        <
        img src = { Fsvg }
        alt = 'facebook logo' / >
        <
        /a> <
        a >
        <
        img src = { Fsvg }
        alt = 'facebook logo' / >
        <
        /a> <
        /div>


        <
        div >
        <
        h5 className = 'mb-3 text-capitalize' >
        working hours <
        /h5> <
        span className = 'd-block' >
        Monday - Friday:
        08: 00 am - 12: 00 am <
        /span>

        <
        span className = 'd-block' >
        Saturday - Sunday:
        07: 00 am - 11: 00 pm <
        /span>


        <
        /div>



        <
        /div>

        <
        /div>


        <
        /div>


    )


}


export default EndFun;