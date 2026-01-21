import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/components/app.config';
import { App } from './app/components/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
