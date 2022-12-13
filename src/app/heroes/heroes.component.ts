import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

/**
 * @Component is a decorator function that specifies the Angular
 * metadata for the component.
 *
 * The CLI generated three metadata properties:
 *
 * selector— the component's CSS element selector
 * templateUrl— the location of the component's template file.
 * styleUrls— the location of the component's private CSS styles.
 *
 * The CLI generated the component class and exported it so you can
 * import it elsewhere ... like in the AppModule.
 *
 * The component class controls the appearance and behavior of a view
 * through its template.
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  /**
   * Refactor the component's hero property to be of type 'Hero'.
   * Initialize it with an id of 1 and the name 'Windstorm'.
   */
  heroes = HEROES;
}
