import { Component, OnInit } from '@angular/core';
import { ServerModel } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;

  serverModels: ServerModel[] = [
    new ServerModel(1, 'Main Server', 'Online'),
    new ServerModel(2, 'Backup Server', 'Online'),
    new ServerModel(3, 'Offshore Server', 'Offline'),
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverModels.push(new ServerModel(this.serverModels.length + 1, this.serverName, 'Online'));
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
