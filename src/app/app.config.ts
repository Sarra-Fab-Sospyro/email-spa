import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { urlPrefixInterceptor } from './core/interceptors/url-prefix-interceptor.interceptor';
import { environmentProvider } from './core/tokens/environment.token';

export const appConfig: ApplicationConfig = {
  providers: [
    environmentProvider,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([urlPrefixInterceptor])
    ),
    provideRouter(routes)]
};
