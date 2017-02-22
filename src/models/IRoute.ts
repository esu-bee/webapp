/*export interface IRoute extends ng.route.IRoute {
    pageTitle: string;
}*/



import { RouterModule, Routes } from '@angular/router';
import { EditorComponent }  from '../component/editor/editor.component'; //my app.component.

const appRoutes: Routes = [
  { path: 'editor', 
    component: EditorComponent,
    data: { title: 'EditorT' },
  },
  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];