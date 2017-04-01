import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {HulawebComponent} from "./hulaweb.component";
import {MembersComponent} from "./members.component";
import {MemberDetailComponent} from './member-detail.component';
import {MemberService} from "./member.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  declarations: [
    HulawebComponent,
    MemberDetailComponent,
    MembersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
