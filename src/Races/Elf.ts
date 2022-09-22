import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  static counter = 0;

  constructor(readonly name: string, readonly dexterity: number) {
    super(name, dexterity);
    Elf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.counter;
  }
}

export default Elf;