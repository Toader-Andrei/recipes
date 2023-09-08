import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() onAddRecipe: EventEmitter<Recipe> = new EventEmitter();

  name!: string;
  description!: string;
  difficulty!: string;
  masterchef!: string;

  validation: boolean = false;

  onSubmit() {
    if (
      !this.name ||
      !this.description ||
      !this.difficulty ||
      !this.masterchef
    ) {
      this.validation = true;
      return;
    } else {
      this.validation = false;
    }

    const newRecipe = {
      name: this.name,
      description: this.description,
      difficulty: this.difficulty,
      masterchef: this.masterchef,
    };

    this.onAddRecipe.emit(newRecipe);

    this.name = '';
    this.description = '';
    this.difficulty = '';
    this.masterchef = '';
  }
}
