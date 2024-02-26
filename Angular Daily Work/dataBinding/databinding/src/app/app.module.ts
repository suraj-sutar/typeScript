import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { OneWayComponentComponent } from './one-way-component/one-way-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    OneWayComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
