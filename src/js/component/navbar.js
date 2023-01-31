import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate para redireccionar desde una funcion
import Swal from 'sweetalert2'



export const Navbar = () => {
    const Swal= require('sweetalert2')
    const {store, actions} = useContext(Context);
    const navigate = useNavigate() //activamos useNavigate

    console.log(store.favorites);

    function handleLogout() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                actions.logout()//cerrar la sesion
                Swal.fire(
                    'Logged out!',
                    'You have logged out.',
                    'success'
                )
                navigate("/") //usamos navigate para redireccionar

            }
        })
	}
    

    return ( 
        <nav className = "navbar navbar-light bg-dark mb-3 px-4 d-flex">
            <Link to = "/">
                <span className = "navbar-brand mb-0 h1" > <img id="local-nav-logo-mobile" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_horiz_2x-f98247cb30aa_c622cfa9.png?region=0,0,732,75" alt="Portal Nav - Bottom"/> </span> 
            </Link> 
            <div className = "ml-auto">

            <div className="btn-group">
            {store.auth === true?<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" style={{backgroundColor: "black"}}>
                    Favorites {store.favorites.length}
                </button>: null}
                <ul className="dropdown-menu dropdown-menu-lg-end" style={{textColor: "white", backgroundColor: "black"}}>
                    {store.favorites.map((element, index) =><li><button className="dropdown-item text-align-middle" style={{width: "200px", textColor: "white"}} type="button" key={index}>{element} <button type="button" className="btn btn-outline-danger col float-end" onClick={() => actions.removeFav(index)}>
                            <i className="fas fa-trash-alt"></i>
                            </button></button></li>
                    )}
                </ul>
            </div>
            
            <div className="btn-group mx-3">
            {store.auth === true? <button className="btn btn-secondary ms-2" onClick={handleLogout}>Logout</button> : null}
            </div>
        </div> 
    </nav>
    );
};



