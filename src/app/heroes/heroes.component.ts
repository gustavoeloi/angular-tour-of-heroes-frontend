import { MessageService } from './../shared/services/message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  isClicked = false;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.isClicked = !this.isClicked;

    if (this.isClicked) {
      this.selectedHero = hero;
      this.messageService.add(`HeroesComponent: Selected hero id: ${hero.id}`);
    } else {
      this.selectedHero = undefined;
    }
  }

  testeLog() {
    console.log('O item foi clickado!');
  }
}
