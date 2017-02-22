import { NgModule, Component } from "@angular/core";

//Module needed for running Angualr websites.
import { BrowserModule } from '@angular/platform-browser';

@Component ({
    selector: 'my-app',
    template: '<h1>My App Header</h1>'
    /*template: `<h1>{{title}}</h1>
    <p>{{appProperties.paragraph}}</p>
    <br>{{appProperties.content1}}
    <br>{{appProperties.content2}}`
    */
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