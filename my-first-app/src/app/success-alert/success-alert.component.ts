import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
    p{
      padding: 10px;
      background: yellow;
      width: 200px;
      border-radius : 5px;
      margin: 5px;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
