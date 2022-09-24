import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      let remainingHP = this._lifePoints - attackPoints;
      if (remainingHP < 1) {
        remainingHP = -1;
      }
      return remainingHP;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}

const monster1 = new Monster();

console.log(monster1);
console.log(monster1.receiveDamage(610));