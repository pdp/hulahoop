import {Member} from "./domain/Member";
import {Account} from "./domain/Account";
import {LocationContext} from "./domain/LocationContext";

export const MEMBERS: Member[] = [
  new Member('ABC', 'Antoine', 'Denert', new Account('toineke', 'xxx'), new LocationContext('2000', 'Antwerpen', 'Antwerpen')),
  new Member('DEF', 'Gilbert',  'Struyf', new Account('gilleke', 'xxx'), new LocationContext('9000', 'Gent', 'Oost-Vlaanderen')),
  new Member('GHI', 'Annemie', 'Van Gils', new Account('mieke', 'xxx'), new LocationContext('2018', 'Antwerpen', 'Antwerpen')),
  new Member('JKL', 'Didier', 'Horemans', new Account('didierke', 'xxx'), new LocationContext('9120', 'Beveren-Waas', 'Oost-Vlaanderen')),
  new Member('MNO', 'Seppe', 'Moerbeke', new Account('seppie', 'xxx'), new LocationContext('3000', 'Leuven', 'Vlaams-Brabant'))
];
