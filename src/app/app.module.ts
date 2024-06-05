import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './lazy/parent/parent.component';
import { ChildComponent } from './lazy/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DependencyComponent } from './home/dependency/dependency.component';
import { ObservableComponent } from './home/observable/observable.component';
// import { TemplateDrivenFormComponent } from './lazy/template-driven-form/template-driven-form.component';
import { ReactiveFormExampleComponent } from './lazy/reactive-form-example/reactive-form-example.component';
import { BindingComponent } from './lazy/binding/binding.component';
import { PipeComponent } from './home/pipe/pipe.component';
import { DirectiveComponent } from './home/directive/directive.component';
import { HoverHighlightDirective } from './core/hover-highlight.directive';
import { HttpClientComponent } from './common-data/http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { StandaloneComponentComponent } from './common-data/standalone-component/standalone-component.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    
    //TemplateDrivenFormComponent,
    ReactiveFormExampleComponent,
    

    
    
    HoverHighlightDirective,
    HttpClientComponent,
    StandaloneComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
