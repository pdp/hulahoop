import {Injectable} from "@angular/core";
import {Member} from "./domain/Member";
import {MEMBERS} from "./mock-members";

@Injectable()
export class MemberService {
  getMembers() : Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }
}
