export class LocationContext {
  private zipCode: string;
  private municipality: string;
  private province: string;
  private searchRange: number;

  constructor(zipCode:string, municipality:string, province: string) {
    this.zipCode = zipCode;
    this.municipality = municipality;
    this.province = province;
  }

}
