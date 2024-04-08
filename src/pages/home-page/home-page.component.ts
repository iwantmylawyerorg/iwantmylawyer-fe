import { Component } from '@angular/core';
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";

@Component({
  selector: 'app-HomePage',
  standalone: true,
  imports: [
    MainHeaderComponent
  ],
  templateUrl: './HomePage.component.html',
  styleUrl: './HomePage.component.css'
})
export class HomePageComponent {

}
