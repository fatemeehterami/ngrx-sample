import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataShowComponent } from './data-show/data-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    DataShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
