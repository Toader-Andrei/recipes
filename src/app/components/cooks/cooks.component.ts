import { Component, Input } from '@angular/core';

import { Chef } from '../../Chef';
import { Recipe } from '../../Recipe';

@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.scss'],
})
export class CooksComponent {
  @Input() recipes!: Recipe[];
  @Input() chefs!: Chef[];
}
