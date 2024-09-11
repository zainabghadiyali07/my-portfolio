import React from "react";
import technicalIcon from "../images/technical icon.png";
import training from "../images/training.png";
import skillsIcon from "../images/skills icon.png";

function Skills() {
  return (
    <div className="skilsWrapper">
      <ol>
        <li>
          <div className="skillsImg">
            <img
              className="smallpic"
              src={technicalIcon}
              width={80}
              height={80}
              alt="technical-icon"
            />
            <h3 className="pop">Technical Skills</h3>
          </div>
          <p>HTML,CSS,JavaScript,React</p>
          <p>UI/UX design tools: Adobe XD, Figma</p>
        </li>
        <li>
          <div className="skillsImg">
            <img
              className="smallpic"
              src={training}
              width={80}
              height={80}
              alt="learning-icon"
            />
            <h3 className="pop">Learning and Interests</h3>
          </div>
          <p>
            Interested in learning advanced React concepts and best practices
          </p>
          <p>Enjoy learning new technologies and solving complex problems</p>
          <p>Excited to learn and grow in the field of frontend development</p>
        </li>
        <li>
          <div className="skillsImg">
            <img
              className="smallpic"
              src={skillsIcon}
              width={80}
              height={80}
              alt="learning-icon"
            />
            <h3 className="pop">Soft Skills</h3>
          </div>
          <p>Communication</p>
          <p>Teamwork</p>
          <p>Problem-solving</p>
        </li>
      </ol>
    </div>
  );
}

export default Skills;
