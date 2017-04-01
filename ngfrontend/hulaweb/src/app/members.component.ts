import {Component, OnInit} from '@angular/core';
import {Member} from './member';
import {MemberService} from './member.service';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',

  providers: []
})

export class MembersComponent implements OnInit {

  constructor(private memberService : MemberService) {

  }

  ngOnInit() : void {
    this.getMembers();
  }

  members : Member[];
  selectedMember: Member;

  getMembers(): void {
    this.memberService.getMembers()
      .then(members => this.members = members);
  }

  onSelect(member : Member): void {
    this.selectedMember = member;
  }
}
