import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Login = (props) => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({email:"", password:""});

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        //input mei value typed ho sake,jaise jaise value change ho vese-vese note me set ho jaye
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json();
          if(json.success === true) {
            //storing the authtoken
            localStorage.setItem('token',json.authToken);
            history.push("/");
            props.showAlert("User logged in successfully", "info");

          } 
          else {
              props.showAlert("invalid Credentials", "danger")
          }
          console.log(json);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp"  onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login