import './Model2.css'
import Member1 from '../Assets/Member1.jpg';
import Member2 from '../Assets/Member2.jpg';
import Member3 from '../Assets/Member3.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Model2() {
  return (
    <div id='model2'>
        <h1 className='model-title'>Mentor and Advisors</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member">
            <img width={400} height={400} src="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg"/>
            <div className="description">
                <h1>Vivek Dwivedi</h1>
                <h2>Founder, SciAstra</h2>
                <p className="paragraph">Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER</p>
                <div className="divider"></div>
                <button className="btn">
                  <a href="mailto:someone@yoursite.com">
                    Message Now
                    <i className="bx bx-message" id="messageButton"></i>    
                  </a>
                </button>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg"/>
            <div className="description">
                <h1>Akhil Tripathi</h1>
                <h2>Cofounder SciAstra</h2>
                <p className="paragraph">Mentor, Qualified NEST, Master's Student at NISER</p>
                <div className="divider"></div>
                <button className="btn">
                  <a href="mailto:someone@yoursite.com">
                    Message Now
                    <i className="bx bx-message" id="messageButton"></i>    
                  </a>
                </button>
            </div>
          </div>

          <div className="member">
            <img width={400} height={400} src="https://www.sciastra.com/teams/dr_omkar.jpg"/>
            <div className="description">
                <h1>Dr. Omkar</h1>
                <h2>Mentor & Advisor</h2>
                <p className="paragraph">Principal Project Scientist at Indian Institute of Technology, Madras</p>
                <div className="divider"></div>
                <button className="btn">
                  <a href="mailto:someone@yoursite.com">
                    Message Now
                    <i className="bx bx-message" id="messageButton"></i>    
                  </a>
                </button>
            </div>
          </div>

        </div>
    </div>
  );
}