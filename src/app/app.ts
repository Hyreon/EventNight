import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preference } from './preference';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Preference],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('EventNight');

  protected preferences: string[] = [];

  protected addPreference(preference: string) {
    this.preferences.push(preference);
  }
}
