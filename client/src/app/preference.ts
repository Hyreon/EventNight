import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreferenceOperation } from './preferenceList';

// @ts-ignore
@Component({
  selector: 'preference',
  template: `
    <div>
      <td>{{ preference()?.name }}</td>
      <td><button (click)="move(0, true)">⯭</button></td>
      <td><button (click)="move(-1, true)">⯯</button></td>
      <td><button (click)="move(-1, false)">🡩</button></td>
      <td><button (click)="move(1, false)">🡣</button></td>
      <td><button (click)="delete()">x</button></td>
    </div>
  `,
  imports: [FormsModule],
})
export class Preference {
  editable = input<boolean>(true);
  preference = input<PreferenceItem>();

  deleteEvent = output<PreferenceItem>();
  moveEvent = output<PreferenceOperation>();
  configureEvent = output<PreferenceItem>();

  protected delete() {
    this.deleteEvent.emit(<PreferenceItem>this.preference());
  }

  protected move(offset: number, absolute: boolean) {
    this.moveEvent.emit({
      item: this.preference(),
      destination: offset,
      absolute,
      context: () => true,
      aboveFiltered: true,
    } as PreferenceOperation);
  }
}

export interface PreferenceItem {
  id: number;
  name: string;
  experienced: boolean;
}
