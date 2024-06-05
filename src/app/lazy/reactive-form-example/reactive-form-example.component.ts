import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.router.navigateByUrl('lazy/templateform');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
