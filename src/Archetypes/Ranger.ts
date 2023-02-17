import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static instancesRangerCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instancesRangerCount += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancesRangerCount;
  }
}