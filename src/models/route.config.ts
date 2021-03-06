﻿import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

//import { CrisisListComponent }   from '../component/heros/crisis-list.component';
//import { HeroListComponent }     from '../component/heros/hero-list.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  //{ path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}