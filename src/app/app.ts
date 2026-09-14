import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreferenceInput } from './preferenceInput';
import { Preference } from './preference';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreferenceInput, Preference],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('EventNight');

  protected interactable() {
    //return serverIsUp && !busy;
    return true;
  }

  protected preferences: string[] = [];

  protected addPreference(preference: string) {
    this.preferences.push(preference);
  }

  protected removePreference(preference: string) {
    const index = this.preferences.indexOf(preference);
    this.preferences.splice(index, 1);
  }
}
