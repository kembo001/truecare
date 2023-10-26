import React, { useState, useEffect } from "react";
import './Hamburger.css';
import phone from '../assets/phone-solid.svg';
import Logo from '../assets/LogoHeader.png';

const Navbar = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    };

    useEffect(() => {
        // Function to check if the user has scrolled and add the sticky class
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`Hamburger${isSticky ? ' sticky' : ''}`}>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <a href="/" title="">
                {" "}
                <img
                  className="lazyload"
                  src={Logo}
                  alt="Logo"
                />{" "}
              </a>{" "}                <img src={phone} alt="Phone Icon" width={"25px"} />
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
    );
}

export default Navbar;
