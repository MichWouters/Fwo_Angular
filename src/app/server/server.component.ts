import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
})
export class ServerComponent {
    serverId: number = 10;
    serverName: string = 'server';
    serverStatus: string = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getIsServerOnline(): string {
        return this.serverStatus === 'Offline' ? 'red' : 'green';
    }
}