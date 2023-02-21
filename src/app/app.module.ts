import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomDirectiveDirective,
    TimesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
