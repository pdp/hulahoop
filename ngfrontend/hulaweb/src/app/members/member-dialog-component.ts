import {Component, Optional} from "@angular/core";
import {MdDialogRef} from "@angular/material";
/**
 * Created by peterdp on 27/04/17.
 */

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput [value]="member.firstName">
      </label>
            <label>
        This is a second text box inside of a dialog.
        <input #dialogInput2>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(member.firstName)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
