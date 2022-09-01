import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  obSubscriber: Subscription;
  constructor() { }

  ngOnInit() {
    /*this.obSubscriber = interval(1000).subscribe(count=>{
      console.log(count);
    })*/
    const customIntervalObservable = Observable.create(observer=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count === 2){
          observer.complete();
        }
        if(count > 4){
          observer.error(new Error("count greater than 4"));
        }
        count++;
      },1000)
    });


    this.obSubscriber = customIntervalObservable.pipe(filter(data=>{
      return data > 0;
    }),map((data:number)=>{
      return `round ${data + 1}`; 
    })).subscribe(data=>{
      console.log(data);
    },error => {
      console.log(error);
      alert(error.message);
    },()=>{
      console.log("completed yay!");
    });
  }
  ngOnDestroy(): void {
      this.obSubscriber.unsubscribe();
  }

}
