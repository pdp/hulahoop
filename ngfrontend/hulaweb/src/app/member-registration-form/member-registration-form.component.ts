import {Component, OnInit} from "@angular/core";
import {Member} from "../domain/Member";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Province} from "../domain/Province";
import {GeoDataService} from "../service/geodata.service";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {MemberService} from "../service/member.service";
import {LocationContext} from "../domain/LocationContext";
import {Account} from "../domain/Account";
import {UUID} from "angular2-uuid";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'member-registration-reactiveform',
  templateUrl: './member-registration-form.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationFormComponent implements OnInit {

  memberRegistrationForm: FormGroup;

  member : Member;
  province : Province;
  provinces : Province[];

  constructor(private geoDataService: GeoDataService, private memberService: MemberService, private fb: FormBuilder, private domSanitizer:DomSanitizer) {
    this.buildForm();
    this.getProvinces();
    this.member = new Member('', '', '', '', '', new Account('', ''), new LocationContext('', '', ''), '');
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
      province: ['', Validators.required],
      profilePicture: ['']
    });
  }

  registerMember(member: Member) {
    let formValue = this.memberRegistrationForm.value;


    // this.member.firstName = formValue['firstName'];
    // this.member.nickName = formValue['userName'];
    // this.member.name = formValue['name'];
    // this.member.locationContext.zipCode = formValue['zipCode'];
    // this.member.locationContext.municipality = formValue['municipality'];
    // this.member.locationContext.province = formValue['province'];

    this.memberService.createMember(new Member(UUID.UUID(), "Peter", "De Permentier", "test", new Account("peterdp", "pass1"), new LocationContext("2050", "ANTWERPEN", "ANTWERPEN"),35, this.member.picture));
  }

  uploadProfilePicture(event) {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.member.picture = fileReader.result;
    }

    fileReader.readAsDataURL(event.target.files[0]);
  }

  sanitizeUrl(url:string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
