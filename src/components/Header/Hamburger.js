import React, {useState} from "react";
import './Hamburger.css'
import phone from '../assets/phone-solid.svg';
import Logo from '../assets/LogoHeader.png';


const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div>
            <nav className="Hamburger">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <img className='Logo' src={Logo} alt="Logo" />
                <img src={phone} alt="Phone Icon" />

            </nav>

            <div className={menu_class}>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Hospice Services</a></li>
            <li><a href="/home-health">Home Health</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>

          </ul>
            </div>

        </div>
    )
}

export default Navbar