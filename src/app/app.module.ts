import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

/**
 * NgModules configure the injector and the compiler and help
 * organize related things together.
 *
 * Every Angular app has at least one NgModule class, the root module
 * that you bootstrap to launch the application. By convention, it is
 * usually called 'AppModule'.
 */
@NgModule({
  declarations: [AppComponent, HeroesComponent],
  /**
   * Add 'FormsModule' to the 'imports' array in @NgModule.
   * The 'imports' array contains the list of external modules that the application needs.
   */
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
