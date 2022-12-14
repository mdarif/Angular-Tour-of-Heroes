import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/**
 * NgModules configure the injector and the compiler and help
 * organize related things together.
 *
 * Every Angular app has at least one NgModule class, the root module
 * that you bootstrap to launch the application. By convention, it is
 * usually called 'AppModule'.
 */
@NgModule({
  // The set of components, directives, and pipes that belong to this module.
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  /**
   * imports: The set of NgModules whose exported declarables are available
   * to templates in this module.
   *
   * Add 'FormsModule' to the 'imports' array in @NgModule.
   * The 'imports' array contains the list of external modules that the application needs.
   */
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // The set of injectable objects that are available in the injector of this module.
  providers: [],
  /**
   * The set of components that are bootstrapped when this module is bootstrapped.
   * The components listed here are automatically added to entryComponents.
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
