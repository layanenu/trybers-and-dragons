import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instancesDwarfCount = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instancesDwarfCount += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instancesDwarfCount;
  }
}