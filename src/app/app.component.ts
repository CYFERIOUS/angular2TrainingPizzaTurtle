import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'tmnt', content: 'kawabonga' }];
 
  onServerAdded(ServerData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.serverName,
      content: ServerData.serverContent
    });
  }

  onBlueprintAdded(BlueprintData:{blueprintName: string, blueprintContent: string}) {
   this.serverElements.push({
      type: 'blueprint',
      name: BlueprintData.blueprintName,
      content: BlueprintData.blueprintContent
    });
  }
  onChangeFirst(){
    this.serverElements[0].name = "changedTMNT";
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
 
}
