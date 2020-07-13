export class UnitField {
  uuid: number;
  id: number;
  name: string;
  note: string;
  systemCategory: number;
  type: number;
  unitCategory: number;
  referUnitUUID: number;
  toReferUnitFactor: number;
  setUuid(uuid): void{
    this.uuid = uuid;
  }
  getUuid(): number {
    return this.uuid;
  }
  setId(id): void{
    this.id = id;
  }
  getId(): number {
    return this.id;
  }
  setName(name): void{
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setNote(note): void{
    this.note = note;
  }
  getNote(): string {
    return this.note;
  }
  setSystemCategory(systemCategory): void{
    this.systemCategory = systemCategory;
  }
  getSystemCategory(): number {
    return this.systemCategory;
  }
  setType(type): void{
    this.type = type;
  }
  getType(): number {
    return this.type;
  }
  setUnitCategory(unitCategory): void{
    this.unitCategory = unitCategory;
  }
  getUnitCategory(): number {
    return this.unitCategory;
  }
  setReferUnitUUID(referUnitUUID): void{
    this.referUnitUUID = referUnitUUID;
  }
  getReferUnitUUID(): number {
    return this.referUnitUUID;
  }
  setToReferUnitFactor(toReferUnitFactor): void{
    this.toReferUnitFactor = toReferUnitFactor;
  }
  getToReferUnitFactor(): number {
    return this.toReferUnitFactor;
  }
}
