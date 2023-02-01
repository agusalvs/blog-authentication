import React, {useState, useEffect, useContext} from "react"; // 1. Llamo al hook useContext
import "../../styles/home.css";
import Card from "../component/card.js";
import Planets from "../component/planets.jsx";
import Starships from "../component/starships.jsx"
import { Context } from "../store/appContext.js"; //Importo el Context (contexto)

export const Home = () => {

	const {store}=useContext(Context) //3.Activo el useContext y desestructuro las propiedades que quiero utilizar
	

	return(
		<>
		<h2 className="ms-5 ps-5">Characters</h2>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square" style={{width:"90%"}}>
			{store.characters.map((props)=>
			<div className="col">
				<Card name={props.name} id={props.uid} key={props.uid}/>
			</div>)}
		</div>

		<h2 className="ms-5 ps-5">Planets</h2>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square" style={{width:"90%"}}>
			{store.planets.map((props)=>
			<div className="col">
				<Planets name={props.name} id={props.uid} key={props.uid}/>
			</div>)}
		</div>

		<h2 className="ms-5 ps-5">Starships</h2>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square" style={{width:"90%"}}>
			{store.starships.map((props)=>
			<div className="col">
				<Starships name={props.name} id={props.uid} key={props.uid}/>
			</div>)}
		</div>
	</>
	);
};

// row my-3 mx-3