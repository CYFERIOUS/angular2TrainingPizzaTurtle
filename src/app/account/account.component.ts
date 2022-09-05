import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ColorStatus } from '../services/colorStatus.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
  //providers:[LoggingService]
})
export class AccountComponent implements OnInit{
  @Input() account: {name: string, status: string} = {name:"",status:""};
  @Input() id: number = 0;

  currentId!:number;

  @ViewChild("active") active!: ElementRef;
  @ViewChild("inactive") inactive!: ElementRef;
  @ViewChild("unknown") unknown!: ElementRef;


  constructor(private logserv:LoggingService, private accServ:AccountService,private colorin:ColorStatus){}

  ngOnInit(): void {
    this.colorin.statusColor.subscribe((params)=>{
      if(this.currentId == params.id){
        switch(params.status){
          case 'active':
            this.active.nativeElement.style.backgroundColor = params.color;
            this.inactive.nativeElement.style.backgroundColor = 'transparent';
            this.unknown.nativeElement.style.backgroundColor = 'transparent';
          break;
          case  'inactive':
            this.inactive.nativeElement.style.backgroundColor = params.color;
            this.active.nativeElement.style.backgroundColor = 'transparent';
            this.unknown.nativeElement.style.backgroundColor = 'transparent';
            break;
          case 'unknown':
              this.unknown.nativeElement.style.backgroundColor = params.color;
              this.active.nativeElement.style.backgroundColor = 'transparent';
              this.inactive.nativeElement.style.backgroundColor = 'transparent';
          break;
        }
      }
      
    });
  }

  onSetTo(status: string) {
    this.accServ.updateStatus(this.id,status);
    this.logserv.logStatusChanged(this.account.name,status);
    this.accServ.statusUpdated.emit(status);
    this.currentId = this.id;
  }
}
