import { Component } from '@angular/core';
import {MainHeaderComponent} from "../../headers/main-header/main-header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainHeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
