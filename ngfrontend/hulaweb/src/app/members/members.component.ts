import {Component, Directive, EventEmitter, OnInit, Output} from '@angular/core';
import {Member} from '../domain/Member';
import {MemberService} from '../service/member.service';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  providers: []
})


export class MembersComponent implements OnInit {

  members : Member[];
  member: Member;
  @Output() passMember: EventEmitter<Member> = new EventEmitter<Member>();

  constructor(private memberService : MemberService) {

  }

  ngOnInit() : void {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  onSelect(member : Member): void {
    console.log("The member is propagated");
    this.member = member;
    this.passMember.emit(member);
  }
}
