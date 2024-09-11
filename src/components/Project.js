import gitIcon from "../images/github clickme.jpg";
import diceIcon from "../images/Dice Game.jpg";
import codequery from "../images/codequery.jpg";
import todoimage from "../images/todoimage.jpg";
import weatherImage from "../images/weatherImage.jpg";
import quiz from "../images/quiz.png";

function Project() {
  const projects = [
    {
      imgSrc: diceIcon,
      altText: "dice",
      link: "https://zainabghadiyali07.github.io/the-dice-game/",
    },
    {
      imgSrc: codequery,
      altText: "code",
      link: "https://zainabghadiyali07.github.io/Stack-overflow-demo/",
    },
    {
      imgSrc: weatherImage,
      altText: "weather",
      link: "https://zainabghadiyali07.github.io/weather-app/",
    },
    {
      imgSrc: todoimage,
      altText: "todo",
      link: "https://zainabghadiyali07.github.io/todo-list/",
    },
    {
      imgSrc: quiz,
      altText: "quiz",
      link: "https://zainabghadiyali07.github.io/quiz-app/",
    },
  ];

  return (
    <div className="project">
      <div className="scene">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card__face card__face--front">
              <img src={project.imgSrc} alt={project.altText} />
            </div>
            <div className="card__face card__face--back">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={gitIcon} alt="git" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
