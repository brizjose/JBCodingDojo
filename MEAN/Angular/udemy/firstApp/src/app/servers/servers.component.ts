import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    * {
      color: dodgerblue;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverCreated = false;
  serverName = '';
  servers: string[] = [];

  constructor() {

    // methods in the constructor exist at the moment angular creates this component
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);

  }

  ngOnInit() {
  }

  onServerCreate() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'has been successfully created!';
    this.serverCreated = true;
  }

  onNameServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
