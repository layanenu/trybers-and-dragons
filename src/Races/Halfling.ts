import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static instancesHalflingCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instancesHalflingCount += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this.instancesHalflingCount;
  }
}