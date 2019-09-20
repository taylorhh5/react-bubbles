import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'

function Navigation() {
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};
	return (
		<div className="navigation">
			<nav>
				<Link to='/login'>Login</Link>
				<Link to='/bubblepage'>Bubble Page</Link>
                <Link to='/bubbles'>Bubbles</Link>
				<Link to='/colorlist'>Color List</Link>
				<button onClick={handleLogout}>Logout</button>
			</nav>
		</div>
	);
}

export default Navigation;
