import { Injectable } from '@angular/core';

import { Hero } from './hero.model';

let heroes = [
    new Hero(1, 'Superman'),
    new Hero(2, 'Batman'),
    new Hero(3, 'Spiderman')
    ];

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(heroes);
    }
}
