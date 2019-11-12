import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  posts: any;
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      });
  }

}
