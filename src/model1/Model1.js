import './Model1.css'
import Member1 from '../Assets/Member1.jpg';
import Member2 from '../Assets/Member2.jpg';
import Member3 from '../Assets/Member3.png';
import University from '../University/University';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Model1() {

  const [universities, setUniversities] = useState([]);

  function checkIfImageExists(url, callback) {
    console.log("src =",url);
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      
      img.onerror = () => {
        callback(false);
      };
    }
  }

  var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: 'http://universities.hipolabs.com/search',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2NDY5NDg4LCJpYXQiOjE2NzM4Nzc0ODgsImp0aSI6IjhmN2ViMjJkODNkNzQ3ODBiNWYwMmViZmE1NDg0MDVlIiwidXNlcl9pZCI6MX0.QLzUtbltWGjPVr8WIUSuwbd1OHUYAzfG-FMWdb0nUdw', 
      'Content-Type': 'application/json'
    },
    // limit the number of universities to 10
    params: {
      limit: 15
    }
  };


  useEffect(() => {
   axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setUniversities(response.data);
    }
    )
    .catch(function (error) {
      console.log(error);
    }
    );
  }, []);

  return (
    <div id='model1'>
        <h1 className='model-title'>Team Page</h1>
        <p className='model-title describe'>Learn from scientists, research scholars from top institutes in the world</p>
        <div className="divider"></div>
        <div className="members">
           {universities.map((university) => (
            <University image={`https://logo.clearbit.com/${university.domains[0]}`} name={university.name} country={university.country} description="best"/>
          ))}

        </div>
    </div>
  );
}
