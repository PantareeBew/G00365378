import { Component, OnInit } from '@angular/core';
import { MealService } from '../Services/meal.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  //variables
  Recipe: any = [];
  searchName: string = "";
  constructor(private mealService: MealService) {

  }

  //method to searcch data
  performSearch() {
    console.log(this.searchName);
    this.mealService.GetSearchData(this.searchName).subscribe(
      (data) => {
        this.Recipe = data.results;
      }
    );

  }
  ngOnInit() {
    this.mealService.GetMeal().subscribe(
      (data) => {
        this.Recipe = data.results;
      }
    );
  }

}
