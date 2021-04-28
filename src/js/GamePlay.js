/* eslint-disable no-plusplus */
export default class GamePlay {
  constructor() {
    this.score = document.querySelector('.score__count');
    this.miss = document.querySelector('.miss__count');
  }

  getScores() {
    this.score.textContent++;
  }

  getMisses() {
    this.miss.textContent++;
  }

  resetAllScores() {
    this.score.textContent = 0;
    this.miss.textContent = 0;
  }
}
