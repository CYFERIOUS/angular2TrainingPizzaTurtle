import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  public users: {id:number, name:string}[] = [];
  constructor(private userService:UsersService,private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
      this.users = this.userService.getUsers();
  }
}
