import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
    this.createPost();
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      console.log('Fetched Data:', data);
      // Here you can handle the fetched data
    });
  }
  createPost() {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post.',
      userId: 1
    };

    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe((data: any) => {
      console.log('Created Post:', data);
      // Here you can handle the response of creating a post
    });
  }
}
