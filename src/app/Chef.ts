import { Recipe } from './Recipe';

export interface Chef {
  id: number;
  name: string;
  recipes: Recipe[];
}
