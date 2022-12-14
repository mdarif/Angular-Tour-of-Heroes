import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  // The @Input() decorator indicates that the property value passes in
  // from the parent component (HeroesComponent).
  @Input() hero?: Hero;
}
