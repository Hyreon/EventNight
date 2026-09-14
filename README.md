# EventNight

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.4.

## Wishlist for MVP

- [ ] Dark mode. (Absolutely essential.)
- [ ] A text input for adding new items.
- [ ] A button to add these items to a list shown above.
- [ ] The ability to remove items from the list.
- [ ] A server that saves your preferences.
- [ ] Loading from preferences on startup.
- [ ] Multiple users. (needs design)
- [ ] Another column showing the set of all users' preferences.

## Wishlist for 1.0

- [ ] Scroll wheel if there are many items: very important if we have 20+ items. For movies, we can expect as much.
- [ ] Sorting and ranking items: You can rank items; the set now uses instant runoff voting on the set of group preferences.
- [ ] Dragging items from the group to your own ranking to instantly say your preference
- [ ] Tiers: you can move two bars to determine which items above the top you approve, and which items below the bottom you disapprove.
- [ ] Different sorting algorithms: you can choose approval by green, or approval by gray, or most top picks
- [ ] Elimination: toggle members of the group on and off for when you know someone's absent or present

## Other major features

**Multiple Groups:** Rather than serving one group, we can set up multiple groups served with a different slug per group. Groups can choose to include a password.

**Ratings and History:** We can flag an event as "done." That removes it from the preferences of everyone who watched it, but stores it in a history log so that people can consider a rewatch.

**Movie Database Integration:** Fuzzy logic for names, release dates, ratings, runtime, images and streaming availability for movies. Can be turned off for groups not choosing movies.

## Angular features not used from tutorial

- @defer - this may be useful when there's a very large list of preferences, or a detailed dropdown
- NgOptimizedImage directive - may be useful for preference images
- Angular router - haven't even looked at this, pretty sure EventNight will be a one pager though

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
