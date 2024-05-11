import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-create-post-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './create-post-dialog.component.html',
  styleUrl: './create-post-dialog.component.css'
})
export class CreatePostDialogComponent {

}
