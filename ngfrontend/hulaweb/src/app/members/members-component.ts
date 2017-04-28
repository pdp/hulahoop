import {Component, Directive, EventEmitter, OnInit, Optional, Output} from '@angular/core';
import {Member} from '../domain/Member';
import {MemberService} from '../service/member.service';
import {LocationContext} from "../domain/LocationContext";
import {Account} from "../domain/Account";
import {Body} from "../domain/Body";
import {UUID} from "angular2-uuid";
import {Country} from "../domain/Country";
import {LazyLoadEvent} from "primeng/components/common/api";
import {MdDialog, MdDialogRef} from "@angular/material";
import {DialogContent} from "./member-dialog-component";
import {Province} from "../domain/Province";
import {PROVINCES, BODIES} from "../DummyData";

@Component({
  selector: 'members',
  templateUrl: './members-component.html',
  styleUrls:['./members-component.css'],
  providers: []
})

export class MembersComponent implements OnInit {

  members : Member[];
  datasource: Member[] = [];
  totalRecords: number;
  member: Member;
  newMember: Member;
  countries : Country[];
  show: boolean = false;
  lastDialogResult: string;
  provinces: Province[] = PROVINCES;
  genders: Body[] = BODIES;

  @Output() passMember: EventEmitter<Member> = new EventEmitter<Member>();

  display: boolean = false;

  constructor(private memberService : MemberService, public dialog: MdDialog) {
    this.datasource = [];
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
      console.log("laatste resultaat ", this.lastDialogResult);
    })
  }

  ngOnInit() : void {
    console.log("on init is called");
    this.getMembers();
    this.totalRecords = 3;
    this.datasource = this.members;
    // this.getCountries();
  }

  loadMembers(event: LazyLoadEvent) {
    console.log('event ', event);
    // this.getMembers();
  }

  getMembers() {
    console.log('getmembers called');
    this.memberService.getMembers().subscribe(members => this.members = members);
    console.log('getmembers called', this.members);
  }

  // getCountries() {
  //   this.memberService.getCountries().subscribe(countries => this.countries = countries);
  // }

  createMember() {
    console.log("start to create member");
    // this.newMember = new Member(UUID.UUID(), 'ef', 'ghi', new Account('sdfsdfs', 'sdfsd'), new LocationContext('sdfsdf', 'sdfs', 'sdfsd'), 'test');
    // this.newMember.nickName = 'test';
    // this.newMember.genderRole = "TRANS_MALE";
    // this.newMember.body = new Body("MALE")
    // this.memberService.createMember(this.newMember);
  }

  onSelect(member : Member): void {
    console.log("The member is propagated");
    this.member = member;
    this.passMember.emit(member);
    this.createMember();
  }

  viewMember() {
    this.show = !this.show;
  }


}
