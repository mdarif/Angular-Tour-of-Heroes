import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

/**
 * The @Injectable() decorator tells Angular that this service might itself
 * have injected dependencies. It doesn't have dependencies now but it will
 * soon. It is still useful because it allows Angular to optimize an app by
 * removing the service if it turns out not to be used after all.
 *
 * The @Injectable() decorator accepts a metadata object for the service,
 * the same way the @Component() decorator did for your component classes.
 *
 */
@Injectable({
  providedIn: 'root', // The root injector is the application-level injector.
})

/**
 * When you provide the service at the root level, Angular creates a single,
 * shared instance of HeroService and injects into any class that asks for
 * it.
 *
 * Registering the provider in the @Injectable metadata also allows
 * Angular to optimize an application by removing the service if it
 * isn't used.
 */
export class HeroService {
  /**
   * Edit the constructor with a parameter that declares a private
   * messageService property. Angular injects the singleton MessageService
   * into that property when it creates the HeroService.
   */
  constructor(private messageService: MessageService) {}
  /**
   * 👆 This is an example of a typical service-in-service scenario in which
   * you inject the MessageService into the HeroService which is injected
   * into the HeroesComponent.
   */

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
