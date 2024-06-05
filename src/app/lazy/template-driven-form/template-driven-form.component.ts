import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor(private router:Router) { }
  formData: any = {};
  submitted: boolean = false;
  ngOnInit(): void {}
  onSubmit(formData: any) {
    this.formData = formData;
    this.submitted = true;
    this.router.navigateByUrl('common/http');
  }
}
