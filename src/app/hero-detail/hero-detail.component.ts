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

  // The name of the DOM property to which the input property is bound.
  // By default, the original name of the bound property is used for the
  // DOM property name. You can supply a different name using this
  // property.

  // hero(TS Optional Parameter): Hero
  // https://angular.io/api/core/Input#bindingPropertyName
  @Input() hero?: Hero;
}
