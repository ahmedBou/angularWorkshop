import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    // new object properties based on this recipe blueprint, based on our class
    new Recipe('name of recipe test', 'description of recipe', 'https://p1.pxfuel.com/preview/186/991/672/duck-japanese-noodles-ramen.jpg'),
    new Recipe('name of recipe test', 'description of recipe', 'https://p1.pxfuel.com/preview/186/991/672/duck-japanese-noodles-ramen.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
