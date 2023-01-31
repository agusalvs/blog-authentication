import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"


const Form = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {store, actions}=useContext(Context)

  function enviarDatos(e) {
    e.preventDefault()
    actions.login(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <>
    {store.auth === true ? <Navigate to="/home"/>:
    <form className="mx-auto text-align-left" style={{width: "500px"}} onSubmit={enviarDatos}>
    <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>}
    </>
    );
  };

  export default Form;