import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./Components/Header";
import Main from "./Components/Main";
import { RingSpinner } from "react-spinners-kit"
import "./styles.css";

export default function App(){
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState('')
    const [error, setError] = useState('')

    function fetchUserData(){
        axios.get('https://swapi.dev/api/films')
        .then(response => {
            setMovies(response.data.results);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false)
            setError(error)
        })
        
      }
      useEffect(() => {
        fetchUserData()
      }, [])

    return(
        <div className="container">
            <Header />
            {error && <h1>{error.message}</h1>}
            {loading ?
                <div className="spinner">
                    <RingSpinner size={150} frontColor="yellow" backColor="black"/>
                </div>
            : <Main movies={movies}/>}
            
            
        </div>
    
    )
}

