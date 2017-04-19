import {Component, OnInit} from "@angular/core";
import {Member} from "../domain/Member";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Province} from "../domain/Province";
import {GeoDataService} from "../service/geodata.service";

@Component({
  selector: 'member-registration-reactiveform',
  templateUrl: './member-registration-reactiveform.component.html',
  styleUrls: ['./member-registration-form.component.css']
})

export class MemberRegistrationReactiveFormComponent implements OnInit {

  memberRegistrationForm: FormGroup;

  member : Member;
  province : Province;
  provinces : Province[];
  filteredProvinces: Province[];

  constructor(private geoDataService: GeoDataService, private fb: FormBuilder) {
    this.buildForm();
    this.provinces = [new Province('Antwerpen'), new Province('Oost-Vlaanderen')];
  }

  ngOnInit() : void {
    this.getProvinces();
  }

  getProvinces() {
    // this.geoDataService.getProvinces().subscribe(provinces => this.provinces = provinces);
  }

  buildForm() {
    this.memberRegistrationForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      zipCode: ['', Validators.required],
      municipality: ['', Validators.required],
      province: ['', Validators.required],
      province2: ['', Validators.required]
    });
  }

  filterProvinces(event) {
    let query = event.query;
    this.filteredProvinces = this.filterProvince(query, this.provinces);

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
}
