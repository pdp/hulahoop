import {APP_INITIALIZER, Component, Inject, OnInit} from '@angular/core';
import {Member} from "../domain/Member";
import {Account} from "../domain/Account";
import {Body} from "../domain/Body";
import {LocationContext} from "../domain/LocationContext";
import {MemberService} from "../service/member.service";
import {UUID} from "angular2-uuid";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Province} from "../domain/Province";
import {GeoDataService} from "../service/geodata.service";

@Component({
  selector: 'member-registration-reactiveform',
  templateUrl: './member-registration-reactiveform.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationReactiveFormComponent implements OnInit {

  memberRegistrationForm: FormGroup;

  member : Member;
  provinces : Province[];

  constructor(private geoDataService: GeoDataService, private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() : void {
    this.getProvinces();
  }

  getProvinces() {
    this.geoDataService.getProvinces().subscribe(provinces => this.provinces = provinces);
  }

  buildForm() {
    this.memberRegistrationForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      zipCode: ['', Validators.required],
      municipality: ['', Validators.required],
      province: ['', Validators.required]
    });
  }
}
