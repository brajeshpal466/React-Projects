import React from 'react';
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
function Menu() {
    const reflogin = useRef();
    const refmore = useRef();
    let showcontainer = () => {
        reflogin.current.classList.add('active');
    }
    let hideContainer = () => {
        reflogin.current.classList.remove('active');
    }
    let showcontainermore = () => {
        refmore.current.classList.add('active');
    }
    let hideContainermore = () => {
        refmore.current.classList.remove('active');
    }
    return (
        <div>
            <nav className="navbar">
                <div className="hamberger">
                    <div className="hm1"></div>
                    <div className="hm1"></div>
                    <div className="hm1"></div>
                </div>
                <div className="logo"><h3><NavLink className="title" to='/' >Vegi</NavLink></h3></div>
                <input className="search-bar" placeholder="search vegitable and fruts..."></input>
                <div className="login-btn-arrow" onMouseOver={showcontainer} onMouseOut={hideContainer} >
                    <NavLink to='/login' className=" login btn-btn primary ">Login</NavLink>
                    <div className="arrow-login"></div>
                    <div ref={reflogin} className="login-container">
                        <div className="my-account personal">My Account</div>
                        <div className="my-cart personal">My Cart</div>
                        <div className="my-order personal">My Order</div>
                        <div className="logout personal">Logout</div>
                    </div>

                </div>

                <div className="more" onMouseOver={showcontainermore} onMouseOut={hideContainermore} ><b>More</b>&nbsp; 
                <i className="arrow"></i>
                <div ref={refmore} className="menu"  onMouseOver={showcontainermore} onMouseOut={hideContainermore}>
                    <div className="farmer link-in  "> Farmer Corner</div>
                    <div className="partner link-in">Business</div>
                    <div className="business link-in" >Technology</div>
                    <div className="tech link-in" >Contact</div>
                    <div className="about link-in">About US</div>
                </div>
                </div>
               
                <NavLink to='/cart' className="cart"><i className=" fa fa-shopping-cart">&nbsp;&nbsp;</i><b>Cart</b></NavLink>
            </nav>

            <div>
            </div>
        </div>
    )
}

export default Menu;
