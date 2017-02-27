// this is the root module.

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component'; //my app.component.
import { AppRoutingModule } from './models/route.config';

import { HeroesModule }   from './component/heros/heroes.module';
import { EditorModule }     from './component/editor/editor.module';
import { SearchModule }     from './component/search/search.module';

import { PageNotFoundComponent } from './models/not-found.component';

@NgModule({
    
    //laods required dependencies to launch our app in the browser
    imports: [  BrowserModule, 
                FormsModule, 
                HeroesModule, 
                EditorModule, 
                SearchModule, 
                AppRoutingModule
            ],

    //
    declarations: [ AppComponent, PageNotFoundComponent ],

    //indicates our root Component.
    //(the component that needs to be loaded when pur app gets bootstraped.)
    bootstrap:      [ AppComponent ],

    //providers:    [ Logger ],

    //it isn't actually necessary in this example.
    //A root module has no reason to export anything because other components don't need to import the root module.
    //exports:      [ AppComponent ],
})
export class AppModule { }

/*
declarations - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
exports - the subset of declarations that should be visible and usable in the component templates of other modules.
imports - other modules whose exported classes are needed by component templates declared in this module.
providers - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
bootstrap - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.
 */