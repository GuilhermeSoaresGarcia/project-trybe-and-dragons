import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private _player: Fighter, private _monsters: SimpleFighter[]) {
    super(_player);
  }

  monsterQtd(): number {
    return this._monsters.length;
  }

  playerAttack(): void {
    if (this.monsterQtd() === 1) {
      this._player.attack(this._monsters[0]);
    }
    const monsterIndex = getRandomInt(0, this._monsters.length - 1);
    this._player.attack(this._monsters[monsterIndex]);
  }

  monsterAttack(): void {
    const monsterIndex = getRandomInt(0, this._monsters.length - 1);
    this._monsters[monsterIndex].attack(this._player);
  }

  fight(): number {
    let playerHP: number = this._player.lifePoints;
    let monsters: number[] = this._monsters.map((mnstr) => mnstr.lifePoints);
    let verifyMontersHP: boolean = monsters.some((monster) => monster >= 0);

    while (playerHP >= 0 && verifyMontersHP) {
      this.playerAttack();
      monsters = this._monsters.map((mnstr) => mnstr.lifePoints);
      verifyMontersHP = monsters.some((monster) => monster >= 0);
      if (verifyMontersHP) {
        this.monsterAttack();
        playerHP = this._player.lifePoints;
      }
    }
    return super.fight();
  }
}