import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);    
  }

  fight(): number {
    let p1HP: number = this._player1.lifePoints;
    let p2HP: number = this._player2.lifePoints;
    
    while (p1HP > 0 && p2HP > 0) {
      this._player1.attack(this._player2);
      p2HP = this._player2.lifePoints;
      if (p2HP > 0) {
        this._player2.attack(this._player1);
        p1HP = this._player1.lifePoints;        
      }
    }    
    return super.fight();
  }
}