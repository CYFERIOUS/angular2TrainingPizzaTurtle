import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './canComponentDeactivate.interface';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeSaved = false;

  constructor(private serversService: ServersService, private acRoute:ActivatedRoute, private router:Router) { }
  

  ngOnInit() {

    console.log(this.acRoute.snapshot.queryParams);
    //console.log(this.acRoute.snapshot.fragment);
    this.acRoute.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.acRoute.fragment.subscribe();
    const id = +this.acRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'], { relativeTo: this.acRoute});
  }

  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true;
    }
    
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
    && !this.changeSaved ){
      return confirm("do you want to discard the changes?");
    }else{
      return true;
    }
  };
}
