import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  userId: number;
  title: string;
  id:string;
}
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})

export class HttpClientComponent {
  constructor(private http: HttpClient, private router:Router) { }
  demoData : User[]= [];
  name:any;
  title:any;
  ids:any;
  ngOnInit(): void {
    this.fetchData();
    this.createPost();
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      console.log('Fetched Data:', data);
      this.demoData = data;
      console.log(this.demoData[0].userId)
    });
  }
  createPost() {
    const newPost = {
      title: this.title,
      body: this.name,
      userId: this.ids
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe((data: any) => {
      console.log('Created Post:', data);
      this.router.navigateByUrl('signal')
    });
  }
}
