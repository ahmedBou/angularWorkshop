import { NgModel } from '@angular/forms';

export class Recipe{
 public name: string;
 public description: string;
 public imagePath: string;
// the constructor is a built-in function every class has and which will be executed once you create a new instance of this class
 constructor(name: string, description: string, imagePath: string){
  this.name= name;
  this.description= description;
  this.imagePath= imagePath;
 }

}