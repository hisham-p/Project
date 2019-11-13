import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  posts : any;
  proname : any;
  constructor(
    private service : ServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.proname = params.name;
      // console.log(params)
    });
    this.service.getPosts()
    .subscribe(response=>{
      this.posts = response;
    });
    
  }

}
