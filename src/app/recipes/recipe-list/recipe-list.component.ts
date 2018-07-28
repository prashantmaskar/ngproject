import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test recipe','this some info recipe','https://www.cbc.ca/food/content/images/recipes/WinterVegPie.jpg'),
    new Recipe('A test recipe','this some info recipe','https://www.cbc.ca/food/content/images/recipes/WinterVegPie.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
