import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
  // The component's public interface is defined by its public properties.
  heroes: Hero[] = [];

  // selectedHero is a property of the HeroesComponent class.
  selectedHero?: Hero;

  /**
   * Inject the HeroService
   *
   * Add a private heroService parameter of type HeroService to the constructor.
   */

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // The parameter simultaneously defines a private heroService property and
  // identifies it as a HeroService injection site.

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  /**
   * Add getHeroes()
   *
   * Create a method to retrieve the heroes from the service.
   */

  getHeroes(): void {
    /**
     * OLD: The HeroService.getHeroes() method has a synchronous signature,
     * which implies that the HeroService can fetch heroes synchronously.
     */
    // this.heroes = this.heroService.getHeroes();

    /**
     * NEW: The HeroService.getHeroes() method has an asynchronous signature.
     * It returns a mock heroes as an Observable, using the RxJS of() function.
     * Now the method returns an Observable<Hero[]>.
     */
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    // Observable.subscribe() is the critical difference.
  }

  /**
   * While you could call getHeroes() in the 'constructor', that's not the
   * best practice.
   *
   * Reserve the constructor for minimal initialization such as wiring
   * constructor parameters to properties. The constructor shouldn't do
   * anything. It certainly shouldn't call a function that makes HTTP
   * requests to a remote server as a real data service would.
   */
  ngOnInit(): void {
    this.getHeroes();
  }
}
