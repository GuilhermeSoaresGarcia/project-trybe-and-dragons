import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instancesCounter = 0;
  private _energyType: EnergyType = 'mana';

  constructor(_name: string) {
    super(_name);
    Necromancer.instancesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
