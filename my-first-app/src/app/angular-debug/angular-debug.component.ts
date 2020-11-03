import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-debug',
  templateUrl: './angular-debug.component.html',
  styleUrls: ['./angular-debug.component.css']
})
export class AngularDebugComponent implements OnInit {
  public servers = [];
  constructor() { }

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }

  ngOnInit(): void {
  }

}
