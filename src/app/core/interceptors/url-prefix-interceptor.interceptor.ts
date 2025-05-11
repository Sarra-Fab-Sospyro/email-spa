import { HttpInterceptorFn } from '@angular/common/http';
import { ENVIRONMENT } from '../tokens/environment.token';
import { inject } from '@angular/core';

export const urlPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  const env = inject(ENVIRONMENT);

  const modifiedRequest = req.clone({ url: env.apiUrl + req.url });

  return next(modifiedRequest);
};
