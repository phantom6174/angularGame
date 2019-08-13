import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { Components } from './components';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';


@NgModule({
  declarations: [
    Components  
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('fifthteenPuzzle', reducers)
  ],
  exports: [Components],
  providers: []
})
export class FifthteenPuzzleModule { }