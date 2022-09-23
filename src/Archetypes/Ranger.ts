import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger
  extends Archetype {
  static instancesCounter = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(_name: string) {
    super(_name);
    Ranger
      .instancesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger
      .instancesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
