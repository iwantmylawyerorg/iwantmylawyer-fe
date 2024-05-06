import { Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-expertise-field-form',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './expertise-field-form.component.html',
  styleUrl: './expertise-field-form.component.css'
})
export class ExpertiseFieldFormComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  selectedShoes: string[] = [];

  onSelectionChange(shoe: string) {
    const index = this.selectedShoes.indexOf(shoe);
    if (index === -1) {
      this.selectedShoes.push(shoe);

    } else {
      this.selectedShoes.splice(index, 1);
    }
    console.log(this.selectedShoes);
  }
}
