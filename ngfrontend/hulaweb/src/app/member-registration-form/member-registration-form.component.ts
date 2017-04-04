import { Component, OnInit } from '@angular/core';
import {Member} from "../member";

@Component({
  selector: 'member-registration-form',
  templateUrl: './member-registration-form.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationFormComponent  {

  sex = ['Female', 'Male'];

  member = new Member('ABC', 'Peter', 'De Permentier');

  submitted = false;

  onSubmit() {this.submitted = true;}

  get diagnostic() { return JSON.stringify(this.member); }
}
