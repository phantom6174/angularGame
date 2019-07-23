import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridContainerComponent } from './grid/grid-container.component';
import { GridBaseComponent } from './grid/grid-base/grid-base.component';
import { GridTileComponent } from './grid/grid-tile/grid-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    GridBaseComponent,
    GridTileComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
