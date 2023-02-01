import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Starships = (props) => {
    const {store, actions} = useContext(Context);

    return ( 
            <div className="card border border-dark border-3 m-2" style={{width: "18rem"}}>
                <div className="card-body text-center justify-content-center align-items-center">
                    {/* <img src={"https://starwars-visualguide.com/assets/img/starships/%22+props.id+%22.jpg"} className="card-img-top mb-1" alt="image"/> */}
                    <div className="card-info">
                        <h5 className="card-title d-flex justify-content-center">{props.name}</h5>
                        <p className="card-text d-flex justify-content-center">Description</p>
                    </div>
                </div>
                <div className="card-footer d-block mx-0" style={{backgroundColor: "black"}}>
                    <Link to={"/single/"+props.id} className="btn btn-light float-start">Learn more!</Link>
                        <Link onClick={()=>actions.agregarFavorito(props.name)} className="btn btn-light float-end"><i className="fa fa-heart"></i></Link>
                </div>
            </div>
    );
};

export default Starships;