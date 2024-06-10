import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { }
  currentDate: Date = new Date();
  message: string = 'Hello, Angular Pipes!';
  temperature: number = 25.6789;

  isNext() {
    this.router.navigateByUrl('directive')
  }
}
