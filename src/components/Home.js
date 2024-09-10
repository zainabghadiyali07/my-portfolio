import React from 'react';
import {useNavigate} from 'react-router-dom'
import wallpaper from '../images/wallpaper.jpg';

function Home() {
  const navigate = useNavigate();
  return (
    <main>
    <div className= 'container-word'>
    <div className="container_content">
    <div className="container_content_inner">
    <div className="title">
      <p>Hello!</p>
      <h1 className='name'>I'm Zainab Ghadiyali</h1>
    </div>
    <div className="par">
    <p className='developer'>
    Aspiring Front-End Developer |<br/>
    Passionate About Creating Engaging <br />
    User Experiences 
    </p>
    </div>
    <div className="btns">
      <a href='https://www.linkedin.com/in/zainab-ghadiyali-671665282'>
    <button className='btns_more' >Linkedin</button>
    </a>
    </div>
    </div>
    </div>
     <div className="container_outer_img">
     <div className="img-inner">
     <img src={wallpaper} width={500} height={500} alt="" className="container_img"/>
     
           </div>
         </div>
      </div>
    <div className="overlay"></div>
</main>
     
    
    /*<main className="container">
      
    <div className="main-content">
      <p>HELLO!</p>
      <h1>I'm Zainab Ghadiyali</h1>
      <p>
     Aspiring Front-End Developer |<br/>
    Passionate About Creating Engaging <br />
    User Experiences 
      </p>

      
        <div className='button-container'>
        <button className='btn' >Resume</button>
        
          <button className='btn' >LinkedIn</button>
        </div>
        
        
       
      

      
    </div>
   
    <div className="hero-image">
      
      <img src="/images/zainab.png" width={500} height={500} alt="hero-image" />
    </div>
     
  </main>
*/
  
  )
}

export default Home