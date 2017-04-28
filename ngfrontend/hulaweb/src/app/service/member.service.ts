import {Injectable} from "@angular/core";
import {Member} from "../domain/Member";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Country} from "app/domain/Country";
import {Observable} from "rxjs/Observable";
import {MEMBERS} from "../DummyData";

@Injectable()
export class MemberService {

  page: number = 0;

  private url = 'http://localhost:8080/createmember';

  constructor(private http: Http) {}

  getMembers() {
    // return Observable.from([MEMBERS]);
    return this.http.get('http://localhost:8080/members/?page=0')
      .map((response:Response) => response.json() as Member[]);
  }

  createMember(member:Member) {
  const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url, JSON.stringify(member), {headers})
      .subscribe(r=>{});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCountries() {
    return this.http.get('http://localhost:8080/countries')
      .map((response:Response) => response.json() as Country[]);
  }
}
