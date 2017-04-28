import {Account} from "./Account";
import {LocationContext} from "./LocationContext";
import {Body} from "./Body";
import {GenderRole} from "./GenderRole";

export class Member {
  membershipNumber: string;
  firstName: string;
  name: string;
  account: Account;
  locationContext : LocationContext;
  nickName: string;
  genderRole: GenderRole;
  sex: string;
  body: Body;
  picture: string;
  age: number;

  constructor(membershipNumber, firstName, name, account, locationContext, age, picture) {
    this.membershipNumber = membershipNumber;
    this.firstName = firstName;
    this.name = name;
    this.account = account;
    this.locationContext = locationContext;
    this.age = age;
    this.picture = picture;
  }
}
