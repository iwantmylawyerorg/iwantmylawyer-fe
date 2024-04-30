import { Component } from '@angular/core';
import {ResponsiveHeaderComponent} from "../../headers/responsive-header/responsive-header.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ArticleCarouselComponent} from "../../article-carousel/article-carousel.component";

@Component({
  selector: 'app-lawyer-profile-page',
  standalone: true,
  imports: [
    ResponsiveHeaderComponent,
    MatTabsModule,
    ArticleCarouselComponent
  ],
  templateUrl: './lawyer-profile-page.component.html',
  styleUrl: './lawyer-profile-page.component.css'
})
export class LawyerProfilePageComponent {

}
