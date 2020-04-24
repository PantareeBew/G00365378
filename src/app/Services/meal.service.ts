import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private httpClient:HttpClient) { }

  //get recipe that has cheese
  GetMeal():Observable<any>{
    return this.httpClient.get('https://api.spoonacular.com/recipes/search?apiKey=55e8cedd3dfc446da0b72640291b6cc0&query=cheese');
  }


  GetSearchData(title:string):Observable<any>{
    return this.httpClient.get('https://api.spoonacular.com/recipes/search?apiKey=55e8cedd3dfc446da0b72640291b6cc0&query='+title);
  }
}
