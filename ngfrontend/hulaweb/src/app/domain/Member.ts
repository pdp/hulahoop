import {Account} from "./Account";
import {LocationContext} from "./LocationContext";
import {Body} from "./Body";

export class Member {
  membershipNumber: string;
  firstName: string;
  name: string;
  account: Account;
  locationContext : LocationContext;
  nickName: string;
  genderRole: string;
  sex: string;
  body: Body;

  constructor(membershipNumber, firstName, name, account, locationContext) {
    this.membershipNumber = membershipNumber;
    this.firstName = firstName;
    this.name = name;
    this.account = account;
    this.locationContext = locationContext;
  }
}
