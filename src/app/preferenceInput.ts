import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'preferenceInput',
  template: `
    <label for="textInput">
      Add Preference
      <input id="textInput" type="text" [(ngModel)]="preference" />
    </label>
    <button (click)="submitPreference()">Submit</button>
  `,
  imports: [FormsModule],
})
export class PreferenceInput {
  preference = 'Movie here...';
  submitInputEvent = output<string>();

  protected submitPreference() {
    this.submitInputEvent.emit(this.preference);
  }
}
