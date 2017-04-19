import {Component, Directive, EventEmitter, OnInit, Output} from '@angular/core';
import {Member} from '../domain/Member';
import {MemberService} from '../service/member.service';
import {LocationContext} from "../domain/LocationContext";
import {Account} from "../domain/Account";
import {Body} from "../domain/Body";
import {UUID} from "angular2-uuid";
import {Country} from "../domain/Country";

@Component({
  selector: 'members',
  templateUrl: './members-component.html',
  styleUrls:['./members-component.css'],
  providers: []
})


export class MembersComponent implements OnInit {

  members : Member[];
  member: Member;
  newMember: Member;
  countries : Country[];

  @Output() passMember: EventEmitter<Member> = new EventEmitter<Member>();

  constructor(private memberService : MemberService) {

  }

  ngOnInit() : void {
    this.getMembers();
    // this.getCountries();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  // getCountries() {
  //   this.memberService.getCountries().subscribe(countries => this.countries = countries);
  // }

  createMember() {
    console.log("start to create member");
    this.newMember = new Member(UUID.UUID(), 'ef', 'ghi', new Account('sdfsdfs', 'sdfsd'), new LocationContext('sdfsdf', 'sdfs', 'sdfsd'));
    this.newMember.nickName = 'test';
    this.newMember.genderRole = "TRANS_MALE";
    this.newMember.body = new Body("MALE")
    this.memberService.createMember(this.newMember);
  }

  onSelect(member : Member): void {
    console.log("The member is propagated");
    this.member = member;
    this.passMember.emit(member);
    this.createMember();
  }
}