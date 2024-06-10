import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'd667ea1f61d090c5f83d7f3c5907cc98';

  constructor(private http: HttpClient) { }

  getWeatherByLocation(location: string): Observable<any> {
    const params = new HttpParams()
      .set('q', location)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching weather data', error);
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 401) {
        errorMessage = 'Error 401: Unauthorized. Please check your API key.';
      } else if (error.status === 404) {
        errorMessage = 'Error 404: City not found. Please check the city name.';
      } else {
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
