import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {useNavigate} from "react-router-dom"
import pic from './images/bg2.avif'

const Movie = () => {
    const navigate = useNavigate();
    const[showMovie,setShowMovie]=useState([])
    function Details(id){
        sessionStorage.setItem("current_id", id);
        navigate("/summary");
    }
    useEffect(() => {
        async function showMovies() {
            try {
                const movies = await axios.get("https://api.tvmaze.com/search/shows?q=all")
                //console.log(JSON.stringify(movies.show.image))
                setShowMovie(movies.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        showMovies()
    }, [])
    return (
        <div className='content'>
           
            {
                showMovie.map((movie, i)=>{
                    if(movie.show.image===null)
                    {
                        return(

                            <div className='container'>
                                <img src={pic} alt='' />
                                <div className='info'>
            
                                    <h2 className='Movie_name'>{movie.show.name}</h2>
                                    <h3>({movie.show.genres[0]})</h3>
                                    <h3>{movie.show.premiered}</h3>
                                    <button onClick={()=>Details(movie.show.id)} className='More'>More</button>
                                </div>
            
                            </div>
                                )
                    }
                    
                    return(

                <div className='container'>
                    <img src={movie.show.image.original} alt=''  className='movie-image'/>
                    <div className='info'>

                        <h2 className='Movie_name'>{movie.show.name}</h2>
                        <h3>({movie.show.genres[0]})</h3>
                        <h3>{movie.show.premiered}</h3>
                        <button onClick={()=>Details(movie.show.id)} className='More'>More</button>
                    </div>

                </div>
                    )
                })
            }

        </div>
    )
}

export default Movie
