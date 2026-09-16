import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preference, PreferenceItem } from './preference';

//dumb renderer for the smart preferenceList.ts class
@Component({
  selector: 'preferenceList',
  template: `
    <p>Preferences here...</p>
    @for (preference of preferenceList().preferences(); track preference.id) {
      <preference
        [preference]="preference"
        (deleteEvent)="preferenceList().removePreference($event)"
        (moveEvent)="preferenceList().movePreference($event)"
        (configureEvent)="preferenceList().configurePreference($event)"
      />
    }
  `,
  imports: [FormsModule, Preference],
})
export class PreferenceListComponent {
  preferenceList = input.required<PreferenceList>();
}


export class PreferenceList {
  private _preferences = signal<PreferenceItem[]>([]);
  preferences = this._preferences.asReadonly();
  nextId = 0;

  public addPreference(preference: string) {
    console.log('Added, now', this.preferences()); //debugging preference output
    this._preferences.update(list => [
      ...list,
      {
        id: this.nextId++,
        name: preference,
        experienced: false,
      } as PreferenceItem
    ]);
  }

  anyLoaded() {
    return this.preferences().length > 0;
  }

  public movePreference(preferenceOperation: PreferenceOperation) {
    this._preferences.update(list => {
      const startIndex = list.indexOf(preferenceOperation.item);
      let endIndex = preferenceOperation.absolute
        ? preferenceOperation.destination
        : startIndex + preferenceOperation.destination;
      const result = [...list];
      const [removedItem] = result.splice(startIndex, 1);
      if (endIndex < 0) {
        endIndex = result.length + 1 + endIndex;
      }
      result.splice(endIndex, 0, removedItem);
      return result;
    });
  }

  public removePreference(preference: PreferenceItem) {
    this._preferences.update(list =>
      list.filter(p => p !== preference));
  }

  public configurePreference(preference: PreferenceItem) {
    this._preferences.update(list => list);
    //change nothing, Preference handled its own mutation; but update the display
  }
}

export interface PreferenceOperation {
  item: PreferenceItem;
  destination: number; //index to set
  absolute: boolean; //whether to set the current index (true) or nudge it (false)
  context: (item: PreferenceItem) => boolean; //among these items
  aboveFiltered: boolean; //whether to go above or below items currently filtered out
}
