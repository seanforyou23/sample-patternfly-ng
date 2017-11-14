// standard for ng apps
import { BrowserModule } from '@angular/platform-browser';
// decorator allowing you to place all imports, declarations, and bootstrap files
// for a particular module in a single location
import { NgModule } from '@angular/core';
// for custom form element binding
import { FormsModule } from '@angular/forms';
// custom module to use in the app
import { NotificationModule, CardModule } from 'patternfly-ng';
// the root app component
import { AppComponent } from './app.component';
// custom components/services
import { DatetimeComponent } from './datetime/datetime.component';
import { FooterComponent } from './footer/footer.component';
import { SharedDataService } from './shared-data.service';
import { BirthdayUpdaterComponent } from './birthday-updater/birthday-updater.component';

@NgModule({
  // declarations is where one specifies modules for dependency injection
  declarations: [
    AppComponent,
    DatetimeComponent,
    FooterComponent,
    BirthdayUpdaterComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    FormsModule,
    NotificationModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})

// referenced from main.ts
export class AppModule { }
