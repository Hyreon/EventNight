import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferenceInput } from './preferenceInput';
import { PreferenceList, PreferenceListComponent } from './preferenceList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreferenceInput, PreferenceListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('EventNight');

  protected interactable() {
    //return serverIsUp && !busy;
    return true;
  }

  personalPreferenceList: PreferenceList = new PreferenceList();
  groupPreferenceList: PreferenceList = new PreferenceList();
}
