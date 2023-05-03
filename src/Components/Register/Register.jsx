import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('')
        if(password !== confirm){
            setError('Password did not match')
            return
        }
        else if(password.length < 8){
            setError('Too short!!! password should contain at least 8 character')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Please SignUp</h2>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your@email.com' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Your Password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Your Password' required/>
                </div>
                <input type="submit" value="Sign Up" className='btn-submit' />
            </form>
            <p><small>Already have an account? Please <Link to= "/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Register;