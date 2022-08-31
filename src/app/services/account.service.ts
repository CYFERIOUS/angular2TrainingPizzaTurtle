import { EventEmitter, Injectable } from "@angular/core";
import { ColorStatus } from "./colorStatus.service";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logSer:LoggingService,private colorEst:ColorStatus){}

      statusUpdated = new EventEmitter<string>();

    addAccount(name: string, status:string){
        this.accounts.push({name, status});
        this.logSer.logStatusChanged(name,status);
    }
    updateStatus(id:number, status:string){
        this.accounts[id].status = status;
        this.colorEst.changeColor(status,id);
    }

}