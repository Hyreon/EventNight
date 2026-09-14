import { Component, input, output } from '@angular/core';

@Component({
  selector: 'preference',
  template: `
    <div [contentEditable]="interactable()" (click)="selectInput()">{{ defaultText() }}</div>
  `,
})
export class Preference {
  defaultText = input<string>;
  submitInputEvent = output<string>();

  protected interactable() {
    //return serverIsUp && !busy;
    return true;
  }

  protected selectInput() {
    //todo figure out how to update app preferences when clicked here
    this.submitInputEvent.emit('Thing 1');
  }
}
