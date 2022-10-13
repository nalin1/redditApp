import { Component, OnInit } from '@angular/core';
import { RootObject } from '../models/posts/posts';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  post:Partial<RootObject>;

  constructor(private redditService :RedditService) { 
    this.post ={}
  }

  ngOnInit(): void {
    this.redditService.selectedPost.subscribe((p)=>{
      this.post = p;
    });
  }

}
