
import {Component} from '@angular/core'

@Component({
 selector : "app-form",
 templateUrl : "./databiding.component.html",

})

export class userField{
 username = "";
 allowUser = "";
 


 isValid(){
   this.allowUser = "the user "+ this.username + " allowed to enter";
 }

 getUsername(event: Event){
  // console.log((<HTMLInputElement>event.target).value);
  this.username = (<HTMLInputElement>event.target).value;
  // console.log(this.username);
  

   return this.username;

 }
}