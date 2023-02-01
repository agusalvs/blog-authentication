// import {
//     useParams
// } from "react-router";
import Swal from 'sweetalert2'



const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            characters: [],
            characterInfo: {},
            planets: [],
            planetInfo: {},
            favorites: [],
            auth: false,
            Swal: require('sweetalert2'),
            starships: [],

        },

        actions: {
            // Use getActions to call a function within a fuction
            // exampleFunction: () => {
            //     getActions().changeColor(0, "green");
            // },

            login: (userEmail, userPassword) => {
                fetch('https://3000-agusalvs-authflaskreact-0gjai0a0a45.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            Swal.fire({
                                position: 'middle',
                                icon: 'success',
                                title: 'Logged in',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: data.msg,
                                // footer: '<a href="">Why do I have this issue?</a>'
                            })(data.msg)
                        } else if (data.msg === "You need to signup") {
                            Swal.fire({
                                title: data.msg,
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },

            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },

            signup: (userEmail, userPassword, userUsername, userFullname) => {
                fetch('https://3000-agusalvs-authflaskreact-0gjai0a0a45.ws-us84.gitpod.io/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword,
                            "username": userUsername,
                            "fullname": userFullname
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            Swal.fire({
                                position: 'middle',
                                icon: 'success',
                                title: 'You have successfully signed up',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === 'This user has already been created') {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: data.msg,
                            })(data.msg)
                        }
                    })
                    .catch((err) => console.log(err))
            },

            // loadSomeData: () => {
            // 	/**
            // 		fetch().then().then(data => setStore({ "foo": data.bar }))
            // 	*/
            // 	fetch("https://www.swapi.tech/api/people/")
            // 	.then(res => res.json())
            // 	// .then(data => console.log(data))
            // 	.then((data) => setStore({characters:data.results}));
            // 	// .catch(err => console.error(err))
            // },

            charactersInfo: () => {
                /**
                fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        characters: data.results
                    }));
                // .catch(err => console.error(err))
            },

            getcharacterInfo: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then((data) => setStore({
                        characterInfo: data.result
                    }))
            },

            planetsInfo: () => {
                /**
                fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        planets: data.results
                    }));
                // .catch(err => console.error(err))
            },

            getPlanetInfo: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then((data) => setStore({
                        planetInfo: data.result
                    }))
            },

            starshipsInfo: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        starships: data.results
                    }));
                // .catch(err => console.error(err))
            },


            agregarFavorito: (name) => {
                console.log(name);
                const store = getStore();
                setStore({
                    favorites: [...store.favorites, name]
                })
            },

            removeFav: (index) => { //el index viene del map
                const store = getStore();
                const newList = store.favorites; //newList copia favorites
                newList.splice(index, 1); //splice le quita lo que está en el lugar index
                setStore({ //setStore({favorites:newList}) guarda la newList en favorites
                    favorites: newList
                });
                // console.log(store.favorites)
            },
        },

        changeColor: (index, color) => {
            //get the store
            const store = getStore();

            //we have to loop the entire demo array to look for the respective index
            //and change its color
            const demo = store.demo.map((elm, i) => {
                if (i === index) elm.background = color;
                return elm;
            });

            //reset the global store
            setStore({
                demo: demo
            });
        }
    }
};

export default getState;