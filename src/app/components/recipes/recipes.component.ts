import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  @Input() recipes: Recipe[] = [];
  @Input() favoriteRecipes: Recipe[] = [];
  @Input() isActive: boolean = false;

  @Output() deleteAll = new EventEmitter();
  @Output() deleteRecipe = new EventEmitter();
  @Output() preferredRecipe = new EventEmitter();

  onDeleteRecipe(recipe: Recipe) {
    this.deleteRecipe.emit(recipe);
  }

  onDeleteAllRecipes() {
    this.deleteAll.emit();
  }

  onPreferredRecipe(recipe: Recipe) {
    this.preferredRecipe.emit(recipe);
  }
}
