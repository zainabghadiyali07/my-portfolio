import React from 'react'
import technicalIcon from '../images/technical icon.png'
import training from '../images/training.png'
import skillsIcon from '../images/skills icon.png'

function Skills() {
  return (
    <div >
       
       <ol>
	<li >
    
      
		<h3 className='pop'>
      <img className='smallpic' src={technicalIcon} width={100} height={100} alt="technical-icon" />
      Technical Skills
      
    </h3>
    
      
		<p>HTML,CSS,JavaScript,React</p>
    <p>UI/UX design tools: Adobe XD, Figma</p>
	</li>
	<li >
		<h3 className='pop' >
    <img className='smallpic' src={training} width={50} height={50} alt="learning-icon" />
      Learning and Interests</h3>
		<p>Interested in learning advanced React concepts and best practices</p>
    <p>Enjoy learning new technologies and solving complex problems</p>
    <p>Excited to learn and grow in the field of frontend development</p>
	</li>
	<li >
		<h3 className='pop'>
    <img className='smallpic' src={skillsIcon} width={100} height={100} alt="learning-icon" />
      Soft Skills</h3>
		<p>Communication</p>
    <p>Teamwork</p>
    <p>Problem-solving</p>
	</li>
	
</ol>
    </div>
  )
}

export default Skills