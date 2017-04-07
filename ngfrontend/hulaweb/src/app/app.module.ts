import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {HulawebComponent} from "./hulaweb.component";
import {MembersComponent} from "./members/members.component";
import {MemberDetailComponent} from './member-detail/member-detail.component';
import {MemberService} from "./service/member.service";
import {DashboardComponent} from "./dashboard.component";
import { MemberRegistrationFormComponent } from './member-registration-form/member-registration-form.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    MemberDetailComponent,
    MembersComponent,
    HulawebComponent,
    DashboardComponent,
    MemberRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'registration',
        component: MemberRegistrationFormComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },

    ])
  ],
  providers: [MemberService],
  bootstrap: [HulawebComponent]
})

export class AppModule { }
