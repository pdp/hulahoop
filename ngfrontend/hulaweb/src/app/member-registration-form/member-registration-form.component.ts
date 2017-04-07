import {APP_INITIALIZER, Component, OnInit} from '@angular/core';
import {Member} from "../domain/Member";
import {Account} from "../domain/Account";
import {LocationContext} from "../domain/LocationContext";
import {MemberService} from "../service/member.service";
import {Body} from "../domain/Body";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'member-registration-form',
  templateUrl: './member-registration-form.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationFormComponent  {

  member : Member;

  constructor(private memberService: MemberService) {
    this.initializeMember();
  }

  sex = ['FEMALE', 'MALE'];

  province = ['Antwerpen', 'Oost-Vlaanderen', 'West-Vlaanderen', 'Limburg', 'Vlaams-Brabant'];

  submitted = false;

  onSubmit() {
    this.memberService.createMember(this.member);
    this.initializeMember();
  }

  initializeMember() {
    this.member = new Member(UUID.UUID(), '', '', new Account('', ''), new LocationContext('', '', ''));
    this.member.nickName = 'test';
    this.member.genderRole = "TRANS_MALE";
    this.member.body = new Body("MALE");
  }
}
