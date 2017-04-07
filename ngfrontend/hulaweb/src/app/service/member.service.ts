import {Injectable} from "@angular/core";
import {Member} from "../domain/Member";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MemberService {

  constructor(private http: Http) {}

  getMembers() {
    return this.http.get('http://localhost:8080/members')
      .map((response:Response) => response.json());

  }
}
