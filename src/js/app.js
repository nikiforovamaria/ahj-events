import GamePlay from './GamePlay';
import Controller from './Controller';

const gamePlay = new GamePlay();
const newGame = new Controller(gamePlay);

newGame.init();
