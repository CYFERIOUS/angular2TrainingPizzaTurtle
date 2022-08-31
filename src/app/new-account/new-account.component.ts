import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
  //providers:[LoggingService]
})
export class NewAccountComponent {
 
  constructor(private logserv:LoggingService, private accServ:AccountService){
    this.accServ.statusUpdated.subscribe(
      (status:string)=>{
        alert("new status" + status);
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accServ.addAccount(accountName,accountStatus);
    this.logserv.logStatusChanged(accountName,accountStatus);
  }
}
