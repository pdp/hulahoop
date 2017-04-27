import {Component, OnInit} from "@angular/core";
import {Member} from "../domain/Member";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Province} from "../domain/Province";
import {GeoDataService} from "../service/geodata.service";
import Any = jasmine.Any;

@Component({
  selector: 'member-registration-reactiveform',
  templateUrl: './member-registration-form.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationFormComponent implements OnInit {

  memberRegistrationForm: FormGroup;

  member : Member;
  province : Province;
  provinces : Province[];
  filteredProvinces: Province[];
  provinceCtrl: FormControl;

  constructor(private geoDataService: GeoDataService, private fb: FormBuilder) {
    this.buildForm();
    this.getProvinces();
    this.provinceCtrl = new FormControl();
    this.provinceCtrl.valueChanges.startWith(null).map(province => this.filteredProvinces = this.provinces).subscribe(r => {});
  }

  ngOnInit() : void {
    this.getProvinces();
  }

  getProvinces() {
    this.geoDataService.getProvinces().subscribe(provinces => this.provinces = provinces);
  }


  buildForm() {
    this.memberRegistrationForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      zipCode: ['', Validators.required],
      municipality: ['', Validators.required],
      province: ['', Validators.required]
    });
  }

  filterProvinces(event) {
    let query = event.query;
    this.filteredProvinces = this.filterProvince(query, this.provinces);
    return this.filteredProvinces;

  }

  filterProvince(query, provinces:Province[]):Province[] {
    let filtered : Province[] = [];
    for(let i = 0; i < provinces.length; i++) {
      let province = provinces[i];
      if(province.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(province);
      }
    }
    return filtered;
  }

  registerMember(member: Any) {
    console.log('register member', this.memberRegistrationForm.value);
  }
}
