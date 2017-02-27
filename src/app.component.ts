import { NgModule, Component } from "@angular/core";

//Module needed for running Angualr websites.
import { BrowserModule } from '@angular/platform-browser';

@Component ({
    selector: 'my-app',
    template: `<h1>Angular Router</h1>
            <nav>
            <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/editor" routerLinkActive="editor">Editor</a>
            <a routerLink="/search" routerLinkActive="search">search</a>
            </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {   //we should enable the expermental feature for the error
    title = 'My App Title';

    appProperties = { 
        "id": 1, 
        "paragraph": "paragraph content",
        "content1": "Content One",
        "content2": "Content Two" 
    };
}

/*
- components are the building blocks of Angular 2 applications.
- and the nest verywell inside of eachother.
- each component can have its own class file, html file, css file.

back ticks: will enable us to have multiline template strings
     ` => '  for single qute.
     ~ => "  for double qute.
*/