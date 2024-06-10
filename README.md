##Weather Application
This Angular application displays weather information including the current location's temperature, date and time, humidity, and wind speed by default. Users can search for weather data for other locations. The app also features a toggle for dark mode.

##Features
Current Location Weather: Automatically displays weather data for the user's current location.
Search Functionality: Users can search for weather information by entering a city name or zip code.
Dark Mode: Toggle between light and dark mode.

##Weather Details: Displays temperature, date and time, humidity, wind speed, and weather condition.

##Technologies Used: Angular, TypeScript, HTML, CSS, OpenWeather API, Prerequisites Node.js, Angular CLI.

##Approach --> 
Component-Based Architecture: The app is built using Angular's component-based architecture.
Responsive Design: The UI is designed to be responsive and user-friendly.
Error Handling: The application gracefully handles errors and provides feedback to users.
Geolocation: Utilizes the browser's geolocation API to fetch the user's current location and display the weather data accordingly.

##Known Issues or Limitations -->
Geolocation Permission: If the user denies geolocation permission, the app cannot fetch the current location weather.
API Limitations: The OpenWeather API has rate limits, which may affect the application's ability to fetch data if the limit is exceeded.
Browser Compatibility: Geolocation might not work in all browsers or might require specific permissions.

##Future Enhancements -->
Multiple Locations: Ability to display weather information for multiple locations simultaneously.
Additional Weather Information: Display more detailed weather data such as forecast, sunrise, and sunset times.
Offline Support: Implement caching to provide offline access to previously fetched weather data.

##License -->
This project is licensed under the MIT License.
