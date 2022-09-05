import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './services/account.service';
import { LoggingService } from './services/logging.service';
import { ColorStatus } from './services/colorStatus.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService, LoggingService, ColorStatus],
  bootstrap: [AppComponent]
})
export class AppModule { }
