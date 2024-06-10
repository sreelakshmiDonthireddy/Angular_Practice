import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@Component({
  standalone:true,
  imports:[SharedModule],
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements
OnInit,
OnDestroy,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked
{
  counter=0;
  interval:any;
  channelName:any;
  @ContentChild('projectedContent') projectedContent:any;
  constructor(private alertService:AlertService){
    console.log("child constructor is called")
  }
  ngOnInit():void{
    console.log("child OnInit is called")
    console.log('OnInit---'+ this.projectedContent);

    this.interval=setInterval(()=>{
     this.counter=this.counter+1;
     console.log(this.counter);
    },1000)
  }
  ngOnDestroy(){
    clearInterval(this.interval);
    console.log("child OnDestroy is called")
  }
  ngOnChanges(): void {
    console.log("child OnChanges is called")
    console.log('OnChanges---'+ this.projectedContent);

  }
  ngDoCheck(){
    console.log("child DoCheck is called")
    console.log('DoCheck---'+ this.projectedContent);

  }
  ngAfterContentInit(){
  console.log("in After Content init")
  }
  ngAfterContentChecked(){
    console.log("in After Content checked")
  }
  ngAfterViewInit(){
    console.log("in After view init")
  }
  ngAfterViewChecked(){
    console.log("in After view checked")

  }
  //standalone
  onClick(){
this.alertService.alertClick();
  }
}
