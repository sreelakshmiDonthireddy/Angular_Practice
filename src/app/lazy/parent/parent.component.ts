import { Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
@Input()
export class ParentComponent implements OnInit,OnChanges,DoCheck{
  isChild=false;
  channelName='';
  constructor(private router:Router){
    console.log("parent constructor is called")
  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log("parent OnChanges is called");

  }
  ngOnInit():void{
    console.log("parent OnInit is called")
  }
  ngDoCheck(){
    console.log("parent DoCheck is called");
  }
  toggleChild(){
    this.isChild= !this.isChild;
  }
  isNext(){
    //this.router.navigateByUrl('lazy/binding');
    this.router.navigateByUrl('lazy/reactform');
  }
}
