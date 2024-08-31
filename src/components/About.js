function About() {
  return (
    <div className="about">
     <h1 className="style">About Me!</h1> 
     <p className="paragraph">As a passionate and detail-oriented React developer 
      I specialize in building scalable, efficient, 
      and user-friendly applications. My expertise lies
     in leveraging React's ecosystem to create seamless 
     user experiences. I'm dedicated to writing clean,
      modular code and staying up-to-date with industry 
      trends. With a strong foundation in JavaScript and 
      a keen eye for design, I strive to deliver high-quality 
      solutions that exceed expectations.</p>
      <div className="left">
        <img src="/images/Coder.png" width={600} height={500} alt="coder" className="right" />
      </div>

      <div className="font">
        Skills
      </div>
      <i className="icon" data-tooltip="HTML">
      <img className="bounce" src="/images/HTML Logo.png" width={200} height={100} alt="html" />
    </i>
    <i className="icon" data-tooltip="CSS">
      <img className="bounce" src="/images/css icon2.png" width={160} height={107} alt="css" />
    </i>
    <i className="icon" data-tooltip="JAVASCRIPT">
      <img className="bounce" src="/images/JavaScript-Logo 8.png" width={250} height={126} alt="javascript" />
    </i>
    <i className="icon" data-tooltip="REACT">
      <img className="bounce" src="/images/react transparent2.png" width={150} height={115} alt="react" />
    </i>
 

      
     </div>
	
   
  )
}

export default About;