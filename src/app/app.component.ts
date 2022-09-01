import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService:UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmmiter.subscribe((activeParam)=>{
        this.userActivated = activeParam;
    });
  }
  ngOnDestroy(): void {
      this.activatedSub.unsubscribe();
  }
}
