import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Summary = () => {
 
  const [showSummary, setShowSummary] = useState("")
  const navigate = useNavigate();
  const Book=()=>{
    navigate("/form");
  }
  useEffect(() => {
    var movie_id = sessionStorage.getItem("current_id");
    
    async function showSummary() {
      try {
        const summary = await axios.get(`https://api.tvmaze.com/shows/${movie_id}`)
        document.getElementById('summary').innerHTML = summary.data.summary;
        setShowSummary(summary.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    showSummary()
  }, [])
  return (
    <div className='movie-summary'>

        <h2 className='summary'>Summary</h2>
      <p id='summary'></p>
      <button onClick={()=>Book()} className='book'>Book Now</button>
      
    </div >
  )
}

export default Summary
