// standard for ng apps
import { BrowserModule } from '@angular/platform-browser';
// decorator allowing you to place all imports, declarations, and bootstrap files
// for a particular module in a single location
import { NgModule } from '@angular/core';
// custom module to use in the app
import { NotificationModule } from 'patternfly-ng';
// the root app component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// referenced from main.ts
export class AppModule { }
