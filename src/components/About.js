import coder from "../images/Coder.png";
import htmllogo from "../images/HTML Logo.png";
import cssIcon from "../images/css icon2.png";
import jsIcon from "../images/JavaScript-Logo 8.png";
import reactIcon from "../images/react transparent2.png";

function About() {
  return (
    <div className="about">
      <h1 className="style">About Me!</h1>
      <p className="paragraph">
        As a passionate and detail-oriented React developer I specialize in
        building scalable, efficient, and user-friendly applications. My
        expertise lies in leveraging React's ecosystem to create seamless user
        experiences. I'm dedicated to writing clean, modular code and staying
        up-to-date with industry trends. With a strong foundation in JavaScript
        and a keen eye for design, I strive to deliver high-quality solutions
        that exceed expectations.
      </p>
      <div className="left">
        <img
          src={coder}
          width={600}
          height={500}
          alt="coder"
          className="right"
        />
      </div>
      <div className="font">Skills</div>
      <i className="icon" data-tooltip="HTML">
        <img
          className="bounce"
          src={htmllogo}
          width={200}
          height={100}
          alt="html"
        />
      </i>
      <i className="icon" data-tooltip="CSS">
        <img
          className="bounce"
          src={cssIcon}
          width={160}
          height={107}
          alt="css"
        />
      </i>
      <i className="icon" data-tooltip="JAVASCRIPT">
        <img
          className="bounce"
          src={jsIcon}
          idth={250}
          height={126}
          alt="javascript"
        />
      </i>
      <i className="icon" data-tooltip="REACT">
        <img
          className="bounce"
          src={reactIcon}
          width={150}
          height={115}
          alt="react"
        />
      </i>
    </div>
  );
}

export default About;
