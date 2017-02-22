import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone'

//Angular library that will render the website
//this will allow us to bootstrap or launch the app.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule }  from './app.module'; //my app.module.

//this will bootstrap our module.
platformBrowserDynamic()
    //render application using AppModule.
    .bootstrapModule(AppModule);
