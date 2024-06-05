import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component';
import { FormsModule } from '@angular/forms';

const route:Routes = [
{path:'http', component:HttpClientComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(route),
  ]
})
export class CommonDataModule { }
