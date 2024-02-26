import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { OnewaycomponentComponent } from './onewaycomponent/onewaycomponent.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DatabindingComponent,
    OnewaycomponentComponent,
    TwowayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
