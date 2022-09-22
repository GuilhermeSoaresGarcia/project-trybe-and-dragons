import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static counter = 0;

  constructor(readonly name: string, readonly dexterity: number) {
    super(name, dexterity);
    Dwarf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.counter;
  }
}