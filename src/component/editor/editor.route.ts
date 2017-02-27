import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorComponent }    from './editor.component';

const heroesRoutes: Routes = [
  { path: 'editor',  component: EditorComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditorRoutingModule { }