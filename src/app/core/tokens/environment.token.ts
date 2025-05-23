import { InjectionToken } from "@angular/core";
import { environment } from "../../../environments/environment";

export const ENVIRONMENT = new InjectionToken<typeof environment>('ENVIRONMENT');

export const environmentProvider = {
    provide: ENVIRONMENT,
    useValue: environment
}