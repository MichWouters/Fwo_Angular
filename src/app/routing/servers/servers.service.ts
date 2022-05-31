import { ServerModel } from "./server";

export class ServersService {
  private servers: ServerModel[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number): ServerModel {
    let server: ServerModel = this.servers.find(
      (s) => {
        return s.id === id;
      }
    )!;

    if (server === undefined) {
      return new ServerModel(-1, 'Not Found!', 'Error!');
    }
    return server;
  }

  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
