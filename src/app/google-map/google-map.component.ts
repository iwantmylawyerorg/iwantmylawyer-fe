import { Component } from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";


@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent {
  options: google.maps.MapOptions = {
    mapId: "8e0aeb93af7e9e70",
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };
}
