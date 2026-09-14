import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferenceInput } from './preferenceInput';
import { PreferenceList } from './preferenceList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreferenceInput, PreferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('EventNight');

  protected interactable() {
    //return serverIsUp && !busy;
    return true;
  }

  preferenceList: PreferenceList = new PreferenceList();
}
