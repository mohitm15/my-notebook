import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {

    let history = useHistory();

    const [credentials, setCredentials] = useState({name:"", email:"", password:"",confmpassword:""});

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        //input mei value typed ho sake,jaise jaise value change ho vese-vese note me set ho jaye
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:credentials.name, email:credentials.email, password: credentials.password})
          });
          const json = await response.json();
          if(json.success === true){
            //storing the authtoken
            localStorage.setItem('token',json.authToken);
            history.push("/");
            console.log(json);
            props.showAlert("User registered succesfully!","info");
          } 
          else {
            props.showAlert("Invalid Credentials","danger");
          }
    }

    return (
        <div className="container mt-3">
            <h2>Create an account here</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={onChange} name="name" value={credentials.name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" id="email" onChange={onChange} name="email" value={credentials.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange} name="password" value={credentials.password} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confmpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confmpassword" onChange={onChange} name="confmpassword" value={credentials.confmpassword} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
