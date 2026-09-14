import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preference, PreferenceItem } from './preference';

@Component({
  selector: 'preferenceList',
  template: `
    <p>Preferences here...</p>
    @for (preference of preferences; track preference) {
      <div>Preference entry here...</div>
      <preference
        [preference]="preference"
        (deleteEvent)="removePreference($event)"
        (moveEvent)="movePreference($event)"
      />
    }
  `,
  imports: [FormsModule, Preference],
})

export class PreferenceList {
  protected preferences: PreferenceItem[] = [];
  nextId = 0;

  addPreference(preference: string) {
    console.log('Added, now', this.preferences); //debugging preference output
    this.preferences.push({
      id: this.nextId++,
      name: preference,
    } as PreferenceItem);
  }

  anyLoaded() {
    return this.preferences.length > 0;
  }

  protected movePreference(preferenceOperation: PreferenceOperation) {
    //TODO currently a no-op
  }

  protected removePreference(preference: PreferenceItem) {
    const index = this.preferences.indexOf(preference);
    this.preferences.splice(index, 1);
  }
}

export interface PreferenceOperation {
  item: PreferenceItem;
  destination: number; //index to set
  absolute: boolean; //whether to set the current index (true) or nudge it (false)
  context: (item: PreferenceItem) => boolean; //among these items
  aboveFiltered: boolean; //whether to go above or below items currently filtered out
}
