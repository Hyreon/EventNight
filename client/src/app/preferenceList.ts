import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Preference, PreferenceItem } from './preference';

//dumb renderer for the smart preferenceList.ts class
@Component({
  selector: 'preferenceList',
  template: `
    <p>Preferences here...</p>
    <button (click)="applyFilter(ONLY_SEEN)">Filter to seen</button>
    <button (click)="applyFilter(ONLY_NEW)">Filter to new</button>
    <button (click)="clearFilters()">Clear filters</button>
    @for (preference of getPreferences(); track preference.id) {
      <preference
        [preference]="preference"
        (deleteEvent)="preferenceList().removeItem($event)"
        (moveEvent)="preferenceList().moveItem($event)"
        (changeEvent)="preferenceList().changeItem($event)"
      />
    }
  `,
  imports: [FormsModule, Preference],
})
export class PreferenceListComponent {
  preferenceList = input.required<PreferenceList>();
  filters: ((item: PreferenceItem) => boolean)[] = [];

  ONLY_SEEN = (item: PreferenceItem) => item.experienced;
  ONLY_NEW = (item: PreferenceItem) => !item.experienced;

  getPreferences() {
    let preferences = this.preferenceList().preferences();
    this.filters.forEach((filter) => {
      preferences = preferences.filter(filter);
    });
    return preferences;
  }

  applyFilter(filter: (item: PreferenceItem) => boolean) {
    this.filters.push(filter);
  }

  clearFilters() {
    this.filters = [];
  }
}

//smart data container for the actual preference list
//contains angular hooks for reading and writing
export class PreferenceList {
  private _preferences = signal<PreferenceItem[]>([]);
  preferences = this._preferences.asReadonly();
  nextId = 0;

  public addItem(preference: string) {
    console.log('Added, now', this.preferences()); //debugging preference output
    this._preferences.update((list) => [
      ...list,
      {
        id: this.nextId++,
        name: preference,
        experienced: false,
      } as PreferenceItem,
    ]);
  }

  anyLoaded() {
    return this.preferences().length > 0;
  }

  //general function for moving items
  public moveItem(preferenceOperation: PreferenceOperation) {
    this._preferences.update((list) => {
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

  public removeItem(preference: PreferenceItem) {
    this._preferences.update((list) => list.filter((p) => p !== preference));
  }

  public changeItem(preference: PreferenceItem) {
    this._preferences.update((list) => list);
    //change nothing, Preference handled its own mutation; but update the display
  }
}

export interface PreferenceOperation {
  item: PreferenceItem;
  destination: number; //index to set
  absolute: boolean; //whether to set the current index (true) or nudge it (false)

  //currently unsupported; allows drag & drop even inside a filtered list
  context: (item: PreferenceItem) => boolean; //among these items
  aboveFiltered: boolean; //whether to go above or below items currently filtered out
}
