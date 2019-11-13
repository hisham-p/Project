import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts: any;
  constructor(private service : ServiceService , private router :Router) {
  }
  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
      // console.log(response);
    });
    
  }
}
