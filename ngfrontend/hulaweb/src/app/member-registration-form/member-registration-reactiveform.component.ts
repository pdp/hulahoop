import {APP_INITIALIZER, Component, Inject, OnInit} from '@angular/core';
import {Member} from "../domain/Member";
import {Account} from "../domain/Account";
import {Body} from "../domain/Body";
import {LocationContext} from "../domain/LocationContext";
import {MemberService} from "../service/member.service";
import {UUID} from "angular2-uuid";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'member-registration-reactiveform',
  templateUrl: './member-registration-reactiveform.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationReactiveFormComponent  {

  memberRegistrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.memberRegistrationForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      zipCode: ['', Validators.required],
      municipality: ['', Validators.required]
    });
  }
}
