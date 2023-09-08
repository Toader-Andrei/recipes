import { Component } from '@angular/core';
import { Recipe } from './Recipe';
import { CHEFS } from './mock-chefs';
import { Chef } from './Chef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  recipes: Recipe[] = [];
  favoriteRecipes: Recipe[] = [];
  chefs: Chef[] = CHEFS;
  isActive: boolean = false;

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    const foundChef = this.chefs.find((chef) => {
      return chef.name === recipe.masterchef;
    });
    if (foundChef) {
      foundChef.recipes.push(recipe);
    }
    this.isActive = true;
  }

  onDeleteAll() {
    this.recipes = [];
    this.favoriteRecipes = [];
    this.chefs.forEach((list) => {
      const newList = this.recipes.filter((food) => {
        return food.name !== list.name;
      });
      list.recipes = newList;
    });
  }

  onDeleteRecipe(recipe: Recipe) {
    const newList = this.recipes.filter((food) => {
      return food.name !== recipe.name;
    });
    // log

    const isFavorite = this.favoriteRecipes.find((favRecipe) => {
      return favRecipe.name === recipe.name;
    });

    if (isFavorite) {
      const favorites = this.favoriteRecipes.filter((favRecipe) => {
        return favRecipe.name !== recipe.name;
      });
      this.favoriteRecipes = favorites;
    }

    this.chefs.forEach((removedRecipe) => {
      const aaa = removedRecipe.recipes.filter((a) => {
        return a.name !== recipe.name;
      });
      return (removedRecipe.recipes = aaa);
    });

    if ((this.recipes.length = 0)) {
      this.isActive = false;
      return;
    }

    this.recipes = newList;
  }

  onPreferredRecipeList(recipe: Recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    } else {
      alert('maiiii');
    }
  }
}
