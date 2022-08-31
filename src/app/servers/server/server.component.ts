import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, QueryParamsHandling, Data } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   /* datos sincronos const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe(
      (params:Params)=>{
       this.server = this.serversService.getServer(+params['id']);
      }
    );*/

    this.route.data.subscribe(
      (data:Data)=>{
        this.server = data['server'];
      }
    );///datos asyncronos
  }

  onEdit(){
    
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling:'preserve'}); //relative routing is not working
    //this.router.navigate(['/servers', this.server.id,'edit',{queryParamsHandling:'preserve'}]);
  }

}
