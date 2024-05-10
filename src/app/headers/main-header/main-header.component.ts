import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    MatListItem
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent implements OnInit{
  hamActive:boolean = false;
  role = "";


  handleHam() {
    this.hamActive = !this.hamActive;
  }

    protected readonly localStorage = localStorage;

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

}
