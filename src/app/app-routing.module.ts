import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalComponent } from './signal/signal.component';

const routes: Routes = [
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'common', loadChildren: () => import('./common-data/common-data.module').then(m => m.CommonDataModule) },
  { path: 'signal', component: SignalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
