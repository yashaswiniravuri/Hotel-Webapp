import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
    const history = useHistory()
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        window.localStorage.removeItem('auth');
        history.push("/login");
};


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand p-2" to="/">Officer's GuestHouse</Link>

            <button className="custom-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    {auth !== null && (<Link className="nav-item nav-link" onClick={logout}>Logout</Link>)}
                    {auth === null && (
                        <>
                            <Link className="nav-item nav-link" to="/Login">Login</Link>
                            <Link className="nav-item nav-link" to="/Register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;