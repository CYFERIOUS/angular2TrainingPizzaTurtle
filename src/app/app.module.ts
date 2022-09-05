import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ShareModule, 
    CoreModule,
    AppRoutingModule,
   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
