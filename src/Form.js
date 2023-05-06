import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Form = () => {
  const [showMname, setShowMname] = useState("")
  useEffect(() => {
    var movie_id = sessionStorage.getItem("current_id");
    async function showMname() {
      try {
        const Mname = await axios.get(`https://api.tvmaze.com/shows/${movie_id}`)
        document.getElementById('Movie_Name').innerHTML = Mname.data.name;
        setShowMname(Mname.data)
        console.log(Mname.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    showMname()
  },[])
    return (
      <div className='form'>
        <div className='form-text'>
          <h2 id='Movie_Name'></h2>
          <p className='tag'>Jump into the adventure, with just one ticket</p>
         
        </div>
        <div className='main-form'>
          <div className='inputs'>

            <label htmlFor="name">Name : <br />
              <input type="text" name='name' />
            </label>
            <label htmlFor="name">E-mail : <br />
              <input type="text" name='name' />
            </label>
            <label htmlFor="name">Date : <br />
              <input type="date" name='name' />
            </label>
            <label htmlFor="name">Timing : <br />
              <select name="time" id="time">
                <option value="nine">10am - 1pm</option>
                <option value="two">2pm - 5pm</option>
                <option value="seven">7pm - 10pm</option>
              </select>
            </label>
            <button className='submit'>Submit</button>
          </div>
        </div>




      </div>
    )
  }


export default Form;
