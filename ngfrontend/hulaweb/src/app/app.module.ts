import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {HulawebComponent} from "./hulaweb.component";
import {MembersComponent} from "./members/members-component";
import {MemberDetailComponent} from './member-detail/member-detail.component';
import {MemberService} from "./service/member.service";
import {DashboardComponent} from "./dashboard.component";
import {MemberRegistrationFormComponent} from './member-registration-form/member-registration-form.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {GeoDataService} from "./service/geodata.service";
import {AutoCompleteModule} from 'primeng/primeng';

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
    ReactiveFormsModule,
    HttpModule,
    AutoCompleteModule,
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
  providers: [MemberService, GeoDataService],
  bootstrap: [HulawebComponent]
})

export class AppModule { }
