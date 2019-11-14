import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

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
