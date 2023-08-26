import './Model1.css'
import Member1 from '../Assets/Member1.jpg';
import Member2 from '../Assets/Member2.jpg';
import Member3 from '../Assets/Member3.png';
import University from '../University/University';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Model1() {

  return (
    <div id='model1'>
        <h1 className='model-title'>Team Page</h1>
        <p className='model-title describe'>Learn from scientists, research scholars from top institutes in the world</p>
        <div className="divider"></div>
        <div className="members">
           <University name='University of Bologna' image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bologna-vista02.jpg/250px-Bologna-vista02.jpg" country="Italy" description="The ‘Nourishing Mother of the Studies’ according to its Latin motto, the University of Bologna was founded in 1088 and, having never been out of operation, holds the title of the oldest university in the world."/>

           <University name='University of Oxford' image="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/60/0a.jpg" country="United Kingdom" description="Currently fifth in the world rankings, the University of Oxford is truly one of the highest-ranked and oldest universities in the world, catering to a student community of nearly 24,300 and operating the largest university press in the world."/>

           <University name='University of Salamanca' image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/University_of_Salamanca_Fray_Luis_de_Leon_edited.jpg/220px-University_of_Salamanca_Fray_Luis_de_Leon_edited.jpg" country="Spain" description="The University of Salamanca was founded in 1134 and given the Royal Charter in 1218, making it Spain’s oldest institution, after the now defunct University of Palencia.The University of Salamanca caters to around 26,746 students across its nine campuses."/>

           <University name='Cambridge University' image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg/416px-Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg" country="UK" description="The University of Cambridge is now ranked seventh in the world.Cambridge has around 23,247 students, of which 5,340 come from outside the EU."/>

           
           <University name='Massachusetts Institute of Technology' image="https://contentstatic.techgig.com/photo/87199469/MIT-offers-4-free-online-courses-for-Python-programmers.jpg" country="USA" description="This top-ranked university in the world and founded in 1861 to provide the best research program to students. Sloan School of Management and School of Engineering are some of its highly ranked graduate schools."/>

           <University name='National University of Singapore' image="https://img.emg-services.net/institutes/institute40830/nus-banner-1.png" country="Singapore" description="NUS is the oldest autonomous university in the country.It offers degree programmes in a wide range of disciplines at both the undergraduate and postgraduate levels, including in the sciences, medicine and dentistry, design and environment, law, arts and social sciences, engineering, business, computing, and music."/>





        </div>
    </div>
  );
}
