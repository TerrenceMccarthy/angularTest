import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations'

// allows us to use routes using provideRouter

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideAnimations()]
};
