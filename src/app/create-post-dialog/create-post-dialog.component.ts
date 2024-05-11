import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-create-post-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInput],
  templateUrl: './create-post-dialog.component.html',
  styleUrl: './create-post-dialog.component.css'
})
export class CreatePostDialogComponent {

}
