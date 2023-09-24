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
  notifications: string[] = [];

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    const foundChef = this.chefs.find((chef) => {
      return chef.name === recipe.masterchef;
    });
    if (foundChef) {
      foundChef.recipes.push(recipe);
    }
    this.isActive = true;
    this.notifications.push(' You have added a new recipe!');
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
    this.isActive = false;
    this.notifications.push(' You have deleted all the recipes!');
  }

  onDeleteRecipe(recipe: Recipe) {
    const newList = this.recipes.filter((food) => {
      return food.name !== recipe.name;
    });

    const isFavorite = this.favoriteRecipes.find((favRecipe) => {
      return favRecipe.name === recipe.name;
    });

    if (isFavorite) {
      const favorites = this.favoriteRecipes.filter((favRecipe) => {
        return favRecipe.name !== recipe.name;
      });
      this.favoriteRecipes = favorites;
    }

    this.chefs.forEach((chef) => {
      const updatedRecipes = chef.recipes.filter((chefRecipe) => {
        return chefRecipe.name !== recipe.name;
      });
      chef.recipes = updatedRecipes;
    });

    this.notifications.push(' You have deleted a recipe!');
    this.recipes = newList;

    if (newList.length === 0) {
      this.isActive = false;
      return;
    }
  }

  onPreferredRecipeList(recipe: Recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    } else {
      alert('This recipe is already in your favorite list!');
    }
  }
}
