import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  baseUrl =environment.baseUrl;
  category = new BehaviorSubject('hot');
  selectedPost = new BehaviorSubject({});
  constructor( private http : HttpClient) { }

  GetDATAReddit(payload:any){

    // const url = `${this.baseUrl}/r/aww.json?sortBy=${payload.sortBy}`;
        const url = `${this.baseUrl}/r/aww/${payload.sortBy}/.json?jsonp=`;
     return this.http.get(url) as Observable<any[]>
  }

  overScrollGetReddit(payload:any){
    // const url = `${this.baseUrl}/r/aww.json?after=${payload.after}&&sortBy=${payload.sortBy}`;
       const url = `${this.baseUrl}/r/aww/${payload.sortBy}/.json?jsonp=&&after=${payload.after}`;
     return this.http.get(url) as Observable<any[]>
  }


}
