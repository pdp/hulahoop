export class LocationContext {
  zipCode: string;
  municipality: string;
  province: string;

  constructor(zipCode, municipality, province) {
    this.zipCode = zipCode;
    this.municipality = municipality;
    this.province = province;
  }

}
