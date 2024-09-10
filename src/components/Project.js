import gitIcon from '../images/github clickme.jpg';
import diceIcon from '../images/Dice Game.jpg';
import codequery from '../images/codequery.jpg';
import todoimage from '../images/todoimage.jpg';
import weatherImage from '../images/weatherImage.jpg';
function Project() {
  return (
    
      
    <div className="project"> 
    
    <div class="scene">
  <div class="card">
    <div class="card__face card__face--front">
      <img src={diceIcon} alt='dice' />
    </div>
    <div class="card__face card__face--back">
      <a href="https://zainabghadiyali07.github.io/the-dice-game/">
      <img src={gitIcon} alt='git' />
      </a>
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={codequery} alt='code' />
    </div>
    <div class="card__face card__face--back">
      <a href="https://zainabghadiyali07.github.io/Stack-overflow-demo/">
      <img src={gitIcon} alt='git' />
      </a>
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={weatherImage} alt='code' />
    </div>
    <div class="card__face card__face--back">
      <a href="https://zainabghadiyali07.github.io/Stack-overflow-demo/">
      <img src={gitIcon} alt='git' />
      </a>
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={todoimage} alt='code' />
    </div>
    <div class="card__face card__face--back">
      <a href="https://zainabghadiyali07.github.io/Stack-overflow-demo/">
      <img src={gitIcon} alt='git' />
      </a>
    </div>
  </div>

    </div>
    </div>
    
  )
}

export default Project