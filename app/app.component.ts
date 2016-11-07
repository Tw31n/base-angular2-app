import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    selector: 'angular2-app',
    providers: [ HeroService ],
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    heroes: Hero[] = [];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => {
                    this.heroes = heroes;
                    this.selectedHero = this.heroes[0];
                }
            );
    }

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }
}
