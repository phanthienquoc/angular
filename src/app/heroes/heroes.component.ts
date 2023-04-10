import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  heroes: Hero[] = [];

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.router.navigate(['/heroes', hero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }
}
