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
import {Ng2BootstrapModule, SlideComponent, ModalModule} from "ng2-bootstrap";
import {GeoDataService} from "./service/geodata.service";
import {AutoCompleteModule, DataTableModule, DialogModule, LazyLoadEvent} from 'primeng/primeng';
import {
  MdButtonModule, MdCheckboxModule, MdSelectModule, MdAutocompleteModule, MdInputModule,MdDialogModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {DialogContent} from "./members/member-dialog-component";
import {MemberFicheComponent} from "./member-fiche/member-fiche.component";
import {BannerComponent} from "./banner/banner.component";

@NgModule({
  declarations: [
    MemberDetailComponent,
    MembersComponent,
    HulawebComponent,
    DashboardComponent,
    MemberRegistrationFormComponent,
    DialogContent,
    MemberFicheComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AutoCompleteModule,
    DataTableModule,
    DialogModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdInputModule,
    Ng2BootstrapModule.forRoot(),
    NgbModalModule,
    MdDialogModule,
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
  entryComponents:[DialogContent],
  bootstrap: [HulawebComponent]
})

export class AppModule { }
