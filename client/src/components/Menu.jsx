import React, { useEffect } from "react";
import '../assets/css/style.css';
import { useNavigate, NavLink } from "react-router-dom";

const Menu = () =>{
    return(
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 menu">
                            <nav>
                                <ul>
                                    <li><NavLink to={'/'} className={'nav'}>Dashboard</NavLink></li>
                                    <li><NavLink to={'/Create'} className={'nav'}>Create</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>View Records</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>Logout</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu;