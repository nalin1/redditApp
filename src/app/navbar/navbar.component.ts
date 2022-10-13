import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  constructor(private reditSer :RedditService) { }

  ngOnInit(): void {

  }

  selectedCategroy(catgeory:string){
    console.log('selected categroy',catgeory);
    this.reditSer.category.next(catgeory);
  }
}
