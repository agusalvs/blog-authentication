import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"


const Sign = () => {

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[username,setUsername]=useState("")
const[fullname,setFullname]=useState("")
const {store, actions}=useContext(Context)

function enviarDatos(e) {
    e.preventDefault()
    actions.signup(email,password, username, fullname)
    setEmail("")
    setPassword("")
    setUsername("")
    setFullname("")
}

return (
    <>
    <form className="mx-auto row g-3" style={{width: "800px"}} onSubmit={enviarDatos}>
        <div className="col-12">
            <label for="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail" value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="col-12">
            <label for="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="col-12">
            <label for="inputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="inputUsername" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="col-12">
            <label for="inputFullname" className="form-label">Full name</label>
            <input type="text" className="form-control" id="inputFullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
        <div class="card-body">
            <p>Have an account?</p>
            <a href="https://3000-agusalvs-blogreadinglis-kksyarx91s4.ws-us84.gitpod.io/" class="card-link">Log in</a>
        </div>
    </form>
    </>
    );
};

export default Sign;


{/* <form className="mx-auto text-align-left" style={{width: "500px"}} onSubmit={enviarDatos}>
    <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form> */}