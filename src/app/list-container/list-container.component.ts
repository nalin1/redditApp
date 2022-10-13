import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent,  Subject, takeUntil } from 'rxjs';
import { RootObject } from '../models/posts/posts';

import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
  animations: [
    trigger('heart', [
      state(
        'unliked',
        style({
          color: '#fff',
          opacity: '0.5',
          transform: 'scale(1)',
        })
      ),
      state(
        'liked',
        style({
          color: '#e74c3c',
          opacity: '1',
          transform: 'scale(1.1)',
        })
      ),
      transition('unliked <=> liked', animate('100ms ease-out')),
    ]),
  ],
})
export class ListContainerComponent implements OnInit {
  //  public  posts: any =[];
  private postsSubject = new BehaviorSubject<Array<RootObject>>([]);
  posts$ = this.postsSubject.asObservable();
  posts: RootObject[] = [];
  showData = false;
  isLoading: boolean;
  category: string = 'Hot';
  likeState: string;
  iconName: string;

  constructor(private redditService:RedditService,private router:Router) {
    this.isLoading = false;
    this.likeState = 'unliked';
    this.iconName = 'heart-empty';
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.redditService.category.subscribe((cat: string) => {
      this.category = cat;
      this.LoadInitalData();
    });
  }
  LoadInitalData() {
    this.isLoading =true;
    this.posts = [];
    this.postsSubject.next(this.posts);
    let payload = {
      sortBy: this.category,
    };
    this.redditService.GetDATAReddit(payload).subscribe((res: any) => {
      console.table('got reddit dtaa', res);
      this.isLoading = false;
      this.posts = res.data.children;
      this.postsSubject.next(this.posts);
      this.showData = true;
    });
  }

  onScrollingFinished() {
    this.isLoading = true;
    let lastIndex = this.posts.length;
    let kind;
    let lastID;
    if (this.posts[lastIndex - 1].data) {
      lastID = this.posts[lastIndex - 1].data.id;
      kind = this.posts[lastIndex - 1].kind;
    }
    const payload = {
      after: `${kind}_${lastID}`,
      sortBy: this.category,
    };
    this.redditService.overScrollGetReddit(payload).subscribe((res: any) => {
      console.table('got reddit dtaa', res);
      const combined2 = [...this.posts, ...res.data.children];
      this.posts = combined2;
      this.postsSubject.next(this.posts);
      this.isLoading = false;
    });
  }

  toggleLikeState() {
    if (this.likeState == 'unliked') {
      this.likeState = 'liked';
      this.iconName = 'heart';
    } else {
      this.likeState = 'unliked';
      this.iconName = 'heart-empty';
    }
  }

  goToDetials(post: RootObject) {
    console.log('post selected', post);
    this.redditService.selectedPost.next(post);
    this.router.navigate(['/list-details']);
  }
}
