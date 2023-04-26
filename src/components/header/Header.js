import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import EaturkishLogo from '../assartiment/images/Eaturkish.svg';
import '../header/HeaderC.css';
import hiroImg from '../assartiment/images/hiroimg.png';

function NavScrollExample() {
    return ( <
        div className = 'full-header' >
        <
        Navbar expand = "lg"
        className = 'container' >
        <
        Container fluid >
        <
        Navbar.Brand href = "#" > < img src = { EaturkishLogo }
        alt = 'head logo' / > < /Navbar.Brand> <
        Navbar.Toggle / >
        <
        Navbar.Collapse id = "navbarScroll"
        className = 'nav-menu' >
        <
        Nav className = "me-lg-5 text-center my-2 my-lg-0 justify-content-end"
        style = {
            { maxHeight: '200px' } }
        navbarScroll >

        <
        Nav.Link href = "#action2" > menu < /Nav.Link> <
        Nav.Link href = "#action3" > news < /Nav.Link> <
        Nav.Link href = "#action4" > about us < /Nav.Link> <
        Nav.Link href = "#action4" > contact us < /Nav.Link> <
        Nav.Link href = "#action1"
        className = 'login-btn ms-lg-2' > log in < /Nav.Link> <
        /Nav>

        <
        /Navbar.Collapse> <
        /Container> <
        /Navbar>

        <
        div className = 'hiro container d-flex flex-column flex-lg-row' >
        <
        div className = 'hiro__text d-flex flex-column text-lg-start' > < span className = 'hiro__text-span text-capitalize' > Chase the new flovour < /span> <
        h1 className = 'hiro__text-h1 text-capitalize' > the key to fine dining < /h1> <
        p className = 'hiro__text-p' > Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpat morbi facilisis quam scelerisque sapien.Et, penatibus aliquam amet tellus < /p> <
        button className = 'hiro__text-btn text-capitalize rounded-pill border-2 border-white bg-danger text-white px-4 py-2' > explore menu < /button> <
        /div>

        <
        div className = 'hiro__img' >
        <
        img className = 'hiro__img-img'
        src = { hiroImg }
        alt = 'hiro images' / >
        <
        /div>

        <
        /div>

        <
        /div>
    );
}




export default NavScrollExample;