import { Component } from '@angular/core';
import {AILawyerComponent} from "../../ailawyer/ailawyer.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
    imports: [
        AILawyerComponent
    ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
