import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'preference',
  template: `
    <div>
      <td>{{ preference() }}</td>
      <td><button (click)="delete()">x</button></td>
    </div>
  `,
  imports: [FormsModule],
})
export class Preference {
  editable = input<boolean>(true);
  preference = input<string>();

  deleteEvent = output<string>();

  protected delete() {
    this.deleteEvent.emit(<string>this.preference());
  }
}
