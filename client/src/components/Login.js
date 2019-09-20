import React, { useState } from 'react';
import axios from 'axios'
import {axiosWithAuth} from './auth/AxiosWithAuth.js';

function Login(props) {
    const [ credentials, setCredentials ] = useState({});
    
    const handleLogin = (e) => {
        e.preventDefault();
        axios .post(`http://localhost:5000/api/login`, credentials)
        .then(response => {
            console.log(response)
            console.log (credentials)
            localStorage.setItem("token", response.data.payload)
        })
        .catch(err => console.log(err))
        console.log (credentials)
    }

	const handleChanges = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};
	return (
		<div>
			<form>
				<input placeholder={'username'} name='username' type='text' value={credentials.username} onChange={handleChanges} />
				<input placeholder={'password'} name='password' type='password' value={credentials.password} onChange={handleChanges} />
				<button onClick={handleLogin} type='submit'>Login</button>
			</form>
		</div>
	);
}

export default Login;
