import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName  = "testSeverName"
  serverCreated = false;
  servers = ["testServer", "testServer2"];
  constructor() {

    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverCreationStatus = "server was created and the name is "
    //                               + this.serverName;
  }
  onUpdateServerName(event :Event){
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName= (<HTMLInputElement>event.target).value;
    return this.serverName; 
  }

}
