import './Model3.css'
import Member1 from '../Assets/Member1.jpg';
import Member2 from '../Assets/Member2.jpg';
import Member3 from '../Assets/Member3.png';
import Person from '../Person/Person';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Model3() {
  
  return (
    <div id='model3'>
        <h1 className='model-title'>Meet your Mentors</h1>
        <div className="divider"></div>
        <div className="members">
          <Person image={Member1} name="Paul White" university="Illionis University"/>
          <Person image={Member2} name="John Doe" university="Cambridge University"/>
          <Person image={Member3} name="Mathew Hayden" university="Massachussets Institute of Technology"/>
        </div>
    </div>
  );
}