/*
** Bootstrap (load) the Angular application root component
** What about this main.ts file?  https://angular.io/docs/ts/latest/quickstart.html#!#main
*/

import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent); //Angular's browser bootstrap function of application root component

// but where will angular put the root element?
