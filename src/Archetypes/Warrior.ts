import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior
  extends Archetype {
  static instancesCounter = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(_name: string) {
    super(_name);
    Warrior
      .instancesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior
      .instancesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
