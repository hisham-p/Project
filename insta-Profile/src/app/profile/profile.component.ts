import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts: any;
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient , private router :Router) {
  }
  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      });
  }
  click(){
    this.router.navigate(['/profile']);
  }

}
