import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static _counter = 0;

  constructor(readonly name: string, readonly dexterity: number) {
    super(name, dexterity);
    Orc._counter += 1;    
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._counter;
  }
}