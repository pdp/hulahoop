import {Injectable} from "@angular/core";
import {Member} from "../domain/Member";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Country} from "app/domain/Country";
import {Province} from "../domain/Province";

@Injectable()
export class GeoDataService {

  private url = 'http://localhost:8080/geodata/';

  constructor(private http: Http) {}

  getProvinces() {
    return this.http.get(this.url.concat('provinces'))
      .map((response:Response) => response.json() as Province[]);
  }
}
