import Race from './Race';

export default class Orc extends Race {
  private static instancesOrcCount = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesOrcCount += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this.instancesOrcCount;
  }
}