import { Injectable } from '@angular/core';

import { Hero } from '../../model/hero.model';
import { HEROES } from '../../mock-service/hero/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h: any) => h.id === id)!;
    return of(hero);
  }
}
