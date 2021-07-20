import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store/types/UserTypes';

function Navbar() {
    const { user } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
	const logout = () => {
		localStorage.removeItem('myToken');
		dispatch({ type: LOGOUT });
	};
	const Links = user ? (
		<div className='navbar__right'>
			<li>
				<Link to='/dashboard'>Admin,{user.name}</Link>
			</li>
			<li>
				<span onClick={logout}>Logout</span>
			</li>
		</div>
	) : (
		<div className='navbar__right'>
			<li>
				<Link to='/gallery'>Gallery</Link>
			</li>
			<li>
				<Link to='/contactus'>Contact Us</Link>
			</li>
		</div>
	);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <Link to="/" ><img className="logo" src="/images/logo.png"  alt="logo" /></Link>
                    </div>
                    <div className="navbar__right">
                        {Links}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
