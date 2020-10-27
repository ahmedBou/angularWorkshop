import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [`
    .col{
      color: white;
    }
  `]
})
export class DirectivesComponent {
  password = "password=tuna";
  isShow = false;
  log = []
  constructor() { }

  onToggleDetails(){
    this.isShow = !this.isShow; 
    // this.log.push(this.log.length+1)
    // push timeStamp instead
    this.log.push(new Date())
  }
  getColor(){
    console.log(this.log);
    
  }
  // toggleIt(){
  //   this.isShow = !this.isShow;
  // }

}
