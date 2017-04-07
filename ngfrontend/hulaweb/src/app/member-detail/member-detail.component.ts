import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Member} from "../domain/Member";

@Component( {
  selector: 'member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})


export class MemberDetailComponent {

  @Input() member: Member;

}
