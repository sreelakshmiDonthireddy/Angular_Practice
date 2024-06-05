import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
// import { LazyComponent } from 'src/app/lazy-loading/lazy.component';

const routes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'reactform', component: ReactiveFormExampleComponent },
  { path: 'templateform', component: TemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
