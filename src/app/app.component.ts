import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  loadedPosts:Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errMess=>{
      this.error = errMess;
    });
    this.isFetching = true;
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    //console.log(postData);
    this.postService.createAndStorePost(postData.title,postData.content).add(()=>{
      this.onFetchPosts();
    });
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts=>{
      console.log(posts);
      this.isFetching = false;
      this.loadedPosts = posts;
    },error=>{
        this.isFetching = false;
        const errMess = Object.values(error.error);
        console.log(errMess);
        this.error = errMess;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(response=>{
      console.log(response);
      this.loadedPosts = [];
    });
  }
  onHandleError(){
    this.error = null;
  }
  ngOnDestroy(): void {
      this.errorSub.unsubscribe();
  }

 
}
