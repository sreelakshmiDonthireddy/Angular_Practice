import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


@NgModule({
  declarations: [BindingComponent,TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    LazyRoutingModule,
  ]
})
export class LazyModule { }
