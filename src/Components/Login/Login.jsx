import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const [show, setShow] = useState(false)

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value 
        console.log(email, password)

        loginUser(email, password) 
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your@email.com' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" placeholder='Your Password' required/>
                </div>
                <p style={{cursor: 'pointer', marginTop: '-10px'}} onClick={()=> setShow(!show)}> {show ? <span>Hide Password</span> : <span>Show Password</span>}</p>
                <input type="submit" value="Log in" className='btn-submit' />
            </form>
            <p><small>New to the site? Please <Link to="/signup">Sign Up</Link></small></p>
        </div>
    );
};

export default Login;