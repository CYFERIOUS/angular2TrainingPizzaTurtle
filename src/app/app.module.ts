import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { InLineComponent } from './in-line/in-line.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServidoresComponent,
    InLineComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
