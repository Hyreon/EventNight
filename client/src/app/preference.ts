import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'preference',
  template: `
    <label for="framework">
      Add Preference
      <input id="framework" type="text" [(ngModel)]="preference" />
    </label>
    <button (click)="selectInput()">Submit</button>
  `,
  imports: [FormsModule],
})
export class Preference {
  preference = '';
  submitInputEvent = output<string>();

  protected selectInput() {
    //todo figure out how to update app preferences when clicked here
    this.submitInputEvent.emit(this.preference);
  }
}
