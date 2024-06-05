import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  constructor(private router:Router) {}
  data = [{name:'test1', value:'1'},{name:'test2', value:'2'},{name:'test3', value:'3'}]
  ngOnInit(){}
  isNext(){
    this.router.navigateByUrl('dependency')
  }
}
