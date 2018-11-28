import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cold Turkey',
      'Just prepare and let it sit on the countertop',
      'https://www.flamingo.ca/wp-content/uploads/2018/04/flamingo-Dinde_B-631x495.png'),
    new Recipe(
      'Hot Cocoa',
      'Boiled water with fresh cocoa powder',
      'http://cdn.shopify.com/s/files/1/0014/7125/0476/products/c105-cocoa-powder-alkalised-10-12-dutch-process-2_600x.png?v=1533145949'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
