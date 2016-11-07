import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'angular2-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    heroes = [
        new Hero(1, 'Superman'),
        new Hero(2, 'Batman'),
        new Hero(3, 'Spiderman')
    ];

    selectedHero = this.heroes[0];

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }
}
