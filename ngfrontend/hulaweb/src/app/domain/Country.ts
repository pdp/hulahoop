export class Country {
  name: string;
  region: String;
  numericCode: String;
  flag: string;

  constructor(name, region, numericCode, flag) {
    this.name = name;
    this.region = region;
    this.numericCode = numericCode;
    this.flag = flag;
  }
}
