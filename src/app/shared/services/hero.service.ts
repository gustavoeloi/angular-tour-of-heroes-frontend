import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/hero.model';
import { HEROES } from 'src/app/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    return heroes;
  }
}
