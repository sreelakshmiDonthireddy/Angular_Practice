import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component';
import { DependencyComponent } from './dependency/dependency.component';
import { ObservableComponent } from './observable/observable.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TemperaturePipe } from '../core/temperature.pipe';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: '', component:PipeComponent},
 { path: 'directive', component:DirectiveComponent},
 { path: 'dependency', component:DependencyComponent},
 { path: 'observable', component:ObservableComponent},
]

@NgModule({
  declarations: [PipeComponent,DirectiveComponent,DependencyComponent,ObservableComponent,TemperaturePipe],
  imports: [
    CommonModule,
  
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
