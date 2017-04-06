import {Component, Input} from "@angular/core";
import {Member} from "./domain/Member";

@Component({
  selector: 'hulaweb',
  templateUrl: 'hulaweb.component.html'
})



export class HulawebComponent {
  @Input() member : Member;
  @Input() passMember;

  receiveMember(member) {
    console.log("testtesttestees");
    this.member = member;
  }
}
