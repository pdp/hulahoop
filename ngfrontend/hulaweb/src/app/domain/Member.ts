import {Account} from "./Account";
import {LocationContext} from "./LocationContext";

export class Member {
  private membershipNumber: string;
  private firstName: string;
  private name: string;
  private _account: Account;
  private locationContext : LocationContext;


  constructor(membershipNumber: string, firstName: string, name: string, account: Account, locationContext: LocationContext) {
    this.membershipNumber = membershipNumber;
    this.firstName = firstName;
    this.name = name;
    this._account = account;
    this.locationContext = locationContext;
  }

  get account(): Account {
    return this._account;
  }

  set account(value: Account) {
    this._account = value;
  }
}
