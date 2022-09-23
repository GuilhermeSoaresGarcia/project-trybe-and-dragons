import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instancesCounter = 0;
  private _energyType: EnergyType = 'mana';

  constructor(_name: string) {
    super(_name);
    Mage.instancesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
