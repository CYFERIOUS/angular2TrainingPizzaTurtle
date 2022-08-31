import { Component, OnInit,HostBinding} from '@angular/core';
import { AccountService } from './services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[AccountService]
})
export class AppComponent implements OnInit{
 accounts:{name:string, status:string}[] = [];
 

 constructor(private acoServ:AccountService){}
 ngOnInit(): void {
   this.accounts = this.acoServ.accounts;
 }
}
