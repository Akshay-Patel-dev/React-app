import * as React from 'react'
import { connect } from 'react-redux';
import './authpage.css'
import {  useAppDispatch } from '../../app/hooks';   
import { allowLogin } from '../../features/Reducers/authSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(email == "timetable@gmail.com" && password == "timetable"){
      console.log("you are looged in ")
      dispatch(allowLogin()); 
    }
    else{
      alert('please enter right details')
    }
  };

  return (
    <div className="loginbody">
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email} 
          onChange={handleInputChange}
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password} 
          onChange={handleInputChange}
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
    </div>
  );
}

export default Login;
