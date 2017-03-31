import { Component } from '@angular/core';

export class Member {
  membershipNumber: string;
  firstName: string;
  name: string;
}

const MEMBERS: Member[] = [
  {membershipNumber: 'ABC', firstName: 'Antoine', name: 'Denert'},
  {membershipNumber: 'DEF', firstName: 'Gilbert', name: 'Struyf'},
  {membershipNumber: 'GHI', firstName: 'Annemie', name: 'Van Gils'},
  {membershipNumber: 'JKL', firstName: 'Didier', name: 'Horemans'},
  {membershipNumber: 'MNO', firstName: 'Seppe', name: 'Moerbeke'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  members = MEMBERS;
  selectedMember: Member;

  onSelect(member : Member): void {
    this.selectedMember = member;
  }
}

