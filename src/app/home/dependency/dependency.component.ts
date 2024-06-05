import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit{
  message: string | undefined;

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit(): void {
    this.message = this.dataService.getData();
  }
  isNext(){
    this.router.navigateByUrl('observable')
  }
}
