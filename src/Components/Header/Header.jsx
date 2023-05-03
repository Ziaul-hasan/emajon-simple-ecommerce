import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOutUser} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOutUser()
        .then(result => {})
        .catch(error => console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span style={{color: 'white'}}>{user.email} <button style={{padding: '5px 8px', marginLeft: '5px'}} onClick={handleSignOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;