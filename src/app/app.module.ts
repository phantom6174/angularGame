import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { FifthteenPuzzleModule } from '../fifthteenPuzzle/fifthteenPuzzle.module';
import { RandomizerModule } from '../randomizer/randomizer.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    FifthteenPuzzleModule,
    RandomizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
