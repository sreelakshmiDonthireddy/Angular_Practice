import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit{
  // greeting: string = 'Hi, DataBinding!';
  name: string = '';
  counter: number = 0;
  message: string = '';
  constructor(private router:Router) { }
  ngOnInit(): void {}
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }
  isNext(){
    //this.router.navigateByUrl('lazy/binding');
    this.router.navigateByUrl('lazy/parent');
  }
}
