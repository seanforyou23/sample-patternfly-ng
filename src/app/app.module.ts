// standard for ng apps
import { BrowserModule } from '@angular/platform-browser';
// decorator allowing you to place all imports, declarations, and bootstrap files
// for a particular module in a single location
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
// for custom form element binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// third party modules to use in the app
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsBootstrapUIModule } from '@ng-dynamic-forms/ui-bootstrap';
import { NotificationModule, CardModule } from 'patternfly-ng';
import { TooltipModule } from 'ngx-bootstrap';
// the root app component
import { AppComponent } from './app.component';

// custom components/services
import { DatetimeComponent } from './datetime/datetime.component';
import { FooterComponent } from './footer/footer.component';
import { SharedDataService } from './shared-data.service';
import { BirthdayUpdaterComponent } from './birthday-updater/birthday-updater.component';
import { RandomService, NotificationService } from './custom-notification-service/notification-service';

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
    DynamicFormsCoreModule.forRoot(),
    HttpModule,
    TooltipModule.forRoot(),
    DynamicFormsBootstrapUIModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationModule
  ],
  providers: [SharedDataService, RandomService, NotificationService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

// referenced from main.ts
export class AppModule { }
