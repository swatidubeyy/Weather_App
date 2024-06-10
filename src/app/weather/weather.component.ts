import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  location: string = '';
  weatherData: any = null;
  errorMessage: string = '';
  darkMode: boolean = false;
  currentDateTime: string = '';
  currentLocation: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getCurrentLocationWeather();
  }

  getCurrentLocationWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
            data => {
              this.weatherData = data;
              this.currentLocation = data.name;
              this.errorMessage = '';
              this.currentDateTime = new Date().toLocaleString();
            },
            error => {
              this.errorMessage = error;
              this.weatherData = null;
            }
          );
        },
        (error) => {
          this.errorMessage = 'Geolocation is not supported by this browser or permission denied.';
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by this browser.';
    }
  }

  getWeather() {
    this.weatherService.getWeatherByLocation(this.location).subscribe(
      data => {
        this.weatherData = data;
        this.currentLocation = data.name;
        this.errorMessage = '';
        this.currentDateTime = new Date().toLocaleString();
      },
      error => {
        this.errorMessage = error;
        this.weatherData = null;
      }
    );
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}
