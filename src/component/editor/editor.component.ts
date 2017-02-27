import { Component } from '@angular/core';

@Component({
  template: `<h2>Editor Component</h2>
             <p>Edit your content</p>`
})

export class EditorComponent {}




/*
moduleId:    sets the source of the base address (module.id) for module-relative URLs such as the templateUrl.
selector:    CSS selector that tells Angular to create and insert an instance of this component where it finds a <hero-list> tag in parent HTML. For example, if an app's HTML contains <hero-list></hero-list>, then Angular inserts an instance of the HeroListComponent view between those tags.
templateUrl: module-relative address of this component's HTML template, shown above.
providers:   array of dependency injection providers for services that the component requires. This is one way to tell Angular that the component's constructor requires a HeroService so it can get the list of heroes to display.

Directives
‾‾‾‾‾‾‾‾‾‾
A directive is a class with a @Directive decorator.
A component is a directive-with-a-template; a @Component decorator is actually a @Directive decorator extended with template-oriented features.
While a component is technically a directive, components are so distinctive and central to Angular applications that this architectural overview separates components from directives.

Structural and Attribute Directives

STRUCTURAL DIRECTIVES alter layout by adding, removing, and replacing elements in DOM.
    <li *ngFor="let hero of heroes"></li>
    <hero-detail *ngIf="selectedHero"></hero-detail>
   - *ngFor tells Angular to stamp out one <li> per hero in the heroes list.
   - *ngIf includes the HeroDetail component only if a selected hero exists.

ATTRIBUTE DIRECTIVES alter the appearance or behavior of an existing element. 
In templates they look like regular HTML attributes, hence the name.
    <input [(ngModel)]="hero.name">




Services
‾‾‾‾‾‾‾‾
Service is a broad category encompassing any value, function, or feature that your application needs.

Almost anything can be a service. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
Examples include:
    -logging service
    -data service
    -message bus
    -tax calculator
    -application configuration

There is nothing specifically Angular about services. Angular has no definition of a service. There is no service base class, and no place to register a service.
example of a service class
    export class Logger {
        log(msg: any)   { console.log(msg); }
        error(msg: any) { console.error(msg); }
        warn(msg: any)  { console.warn(msg); }
    }
*/