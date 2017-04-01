import {Component, Directive, OnInit, Output} from '@angular/core';
import {Member} from './member';
import {MemberService} from './member.service';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  providers: []
})


export class MembersComponent implements OnInit {

  members : Member[];
  @Output() member: Member;

  constructor(private memberService : MemberService) {

  }

  ngOnInit() : void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .then(members => this.members = members);
  }

  onSelect(member : Member): void {
    this.member = member;
  }
}
