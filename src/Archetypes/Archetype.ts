import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly cost: number;
  readonly special: number;

  constructor(readonly name: string) {
    this.cost = 0;
    this.special = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}