import { Component, OnInit } from '@angular/core';
import { HeroService } from './../shared/services/hero.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((hero) => (this.heroes = hero.slice(1, 4)));
  }
}
