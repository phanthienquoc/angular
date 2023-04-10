import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes: Hero[] = [];
  constructor(private heroSerivice: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSerivice.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }
}
