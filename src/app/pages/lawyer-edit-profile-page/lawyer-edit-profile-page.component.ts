import { Component } from '@angular/core';
import {SettingsSidebarComponent} from "../../headers/settings-sidebar/settings-sidebar.component";

@Component({
  selector: 'app-lawyer-edit-profile-page',
  standalone: true,
  imports: [
    SettingsSidebarComponent,
  ],
  templateUrl: './lawyer-edit-profile-page.component.html',
  styleUrl: './lawyer-edit-profile-page.component.css'
})
export class LawyerEditProfilePageComponent {


}
