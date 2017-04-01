import {Component, Input} from "@angular/core";
import {Member} from "./member";

@Component( {
  selector: 'member-detail',
  templateUrl: './member-detail.component.html'
})

export class MemberDetailComponent {
  @Input() member: Member;
}
