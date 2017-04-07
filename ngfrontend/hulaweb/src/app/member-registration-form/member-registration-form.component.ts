import { Component, OnInit } from '@angular/core';
import {Member} from "../domain/Member";
import {Account} from "../domain/Account";
import {LocationContext} from "../domain/LocationContext";

@Component({
  selector: 'member-registration-form',
  templateUrl: './member-registration-form.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationFormComponent  {

  sex = ['Female', 'Male'];

  province = ['Antwerpen', 'Oost-Vlaanderen', 'West-Vlaanderen', 'Limburg', 'Vlaams-Brabant'];

  member = new Member('ABC', 'Peter', 'De Permentier', new Account('petermans', 'xxx'), new LocationContext('9120', 'Beveren-Waas', 'Oost-Vlaanderen'));

  submitted = false;

  onSubmit() {this.submitted = true;}

  get diagnostic() { return JSON.stringify(this.member); }
}
