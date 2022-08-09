import React from "react";
import './App.css';
import SearchIcon from './search.svg';
import { useEffect } from "react"; 

// 68afb008

const API_URL = 'http://www.omdbapi.com?apikey=68afb008';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        	searchMovies('spiderman');
    }, []);

    return(
        <div className="app">
            <h1>MovieSearcher</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}

export default App;