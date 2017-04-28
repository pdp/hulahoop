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
      province: ['', Validators.required],
      profilePicture: ['']
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

  uploadProfilePicture(event) {
    console.log('file upload event ', event);
    // let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //   let file: File = fileList[0];
    //   let formData:FormData = new FormData();
    //   formData.append('uploadFile', file, file.name);
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'multipart/form-data');
    //   headers.append('Accept', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.post(`${this.apiEndPoint}`, formData, options)
    //     .map(res => res.json())
    //     .catch(error => Observable.throw(error))
    //     .subscribe(
    //       data => console.log('success'),
    //       error => console.log(error)
    //     )
    // }
  }
}
