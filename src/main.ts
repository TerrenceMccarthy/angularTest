import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication loads / starts an instance of an angular application and renders a standalone
// component as the applications root component

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
