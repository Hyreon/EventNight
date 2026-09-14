import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'preferenceInput',
  template: `
    <label for="textInput">
      Add Preference
      <input id="textInput" type="text" [(ngModel)]="preference" />
    </label>
    <button (click)="selectInput()">Submit</button>
  `,
  imports: [FormsModule],
})
export class PreferenceInput {
  preference = '';
  submitInputEvent = output<string>();

  protected selectInput() {
    //todo figure out how to update app preferences when clicked here
    this.submitInputEvent.emit(this.preference);
  }
}
