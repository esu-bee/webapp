import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { EditorComponent }    from './editor.component';

import { EditorRoutingModule } from './editor.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditorRoutingModule
  ],
  declarations: [
    EditorComponent
  ]
})
export class EditorModule {}