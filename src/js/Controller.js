export default class Controller {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.board = document.querySelector('.board');
    this.cells = [...document.querySelectorAll('.cell')];
    this.misses = 0;
  }

  init() {
    this.interval = setInterval(() => this.random(), 1000);
    this.board.addEventListener('click', (e) => this.onCellClick(e));
  }

  random() {
    const filteredCells = this.cells.filter((cell) => cell.getElementsByClassName('goblin').length === 0);
    const randomCell = Math.floor(Math.random() * filteredCells.length);
    if (document.querySelector('.goblin')) {
      document.querySelector('.goblin').classList.remove('goblin');
    }
    filteredCells[randomCell].classList.add('goblin');
  }

  onCellClick(e) {
    e.preventDefault();
    if (this.misses === 5) {
      this.gameOver();
    }
    if (e.target.closest('.cell') === document.querySelector('.goblin').closest('.cell')) {
      this.gamePlay.getScores();
    } else {
      this.gamePlay.getMisses();
      this.misses += 1;
      if (this.misses === 5) {
        this.gameOver();
      }
    }
  }

  gameOver() {
    alert('You lost! Game Over! :(');
    this.gamePlay.resetAllScores();
    clearInterval(this.interval);
  }
}
