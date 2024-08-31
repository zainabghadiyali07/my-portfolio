import gitIcon from '../images/github clickme.jpg';
import diceIcon from '../images/Dice Game.jpg';
import codequery from '../images/codequery.jpg';

function Project() {
  return (
    
      
    <div className="project"> 
    
    <div class="scene">
  <div class="card">
    <div class="card__face card__face--front">
      <img src={diceIcon} alt='dice'/>
    </div>
    <div class="card__face card__face--back">
      <a href="https://zainabghadiyali07.github.io/the-dice-game/">
      <img src={gitIcon} alt='git' />
      </a>
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={codequery} alt='code'/>
    </div>
    <div class="card__face card__face--back">
      <a href="https://zainabghadiyali07.github.io/Stack-overflow-demo/">
      <img src={gitIcon} alt='gt' />
      </a>
    </div>
  </div>
    </div>
    </div>
    
  )
}

export default Project