import React, { useState } from "react";
import "./Login.css";
import img from "../../../assets/img/9memes.jpeg"
import {Redirect } from 'react-router-dom';
export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
	e.preventDefault();
   //alert('generando login con back')

   const loginFetch = ( email , password) => {

	   return fetch(`https://api9memes.herokuapp.com/login`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
					},
					body: JSON.stringify({email, password})
				}).then(res => {
					if (!res.ok) throw new Error('Usuario incorrecto')
					return res.json()
				}).then(res => {
					const { token } = res
					return token
				})

	}

		loginFetch( email, password )
		.then((token) => {
			window.localStorage.setItem("token", token);
			setLogged(true);
		})
		.catch((err) => {
			window.localStorage.removeItem("token");
			setError(true);
			setLogged(false);
		});


  }
  if(logged)
  return (<Redirect to='/MostPopular' />)
  else
  return (
	<div className="container h-100 mt-5">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						<img src={img} className="brand_logo" alt="Logo" />
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form onSubmit={handleSubmit}>
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="" className="form-control input_user" value="" placeholder="email" onChange ={ e => setEmail(e.target.value)} value={email} />
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="" className="form-control input_pass" value="" placeholder="password" onChange ={ e => setPassword(e.target.value)}  value={password} />
						</div>
						<div>
							<p className='text-danger'>{ error ? 'El usuario o contraseña no son válidos' : ''}</p>
						</div>
						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customControlInline" />
								<label className="custom-control-label" >Remember me</label>
							</div>
						</div>
							<div className="d-flex justify-content-center mt-3 login_container">
				 	<button type="submit" name="button" className="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						Don't have an account? <a href="#" className="ml-2">Sign Up</a>
					</div>
					<div className="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>


  );
}