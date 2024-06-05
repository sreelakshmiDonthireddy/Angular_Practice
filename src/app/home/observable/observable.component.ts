import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  numbers$: Observable<number[]> | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('3')
    setTimeout(function(){
     console.log('1')
    },3000,
    console.log('2') );
    // Create an observable that emits an array of numbers every second
    this.numbers$ = interval(1000).pipe(
      take(5), // Emits only 5 numbers
      map(index => Array.from({ length: index + 1 }, (_, i) => i)) // Transforms index into an array
    );
  }
  isNext(){
    //this.router.navigateByUrl('lazy/binding');
    this.router.navigate(['lazy/binding']);
  }
}
