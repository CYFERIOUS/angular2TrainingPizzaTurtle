import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlight } from './basicHighLight/basicHighLight.directive';
import { BetterHighlightDirective } from './betterHighlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlight,
    BetterHighlightDirective,
    UnlessDirective
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
