import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    providers: [ HeroService ]
})

export class HeroesComponent implements OnInit {
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
