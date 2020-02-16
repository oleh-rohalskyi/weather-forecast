let config = function() {
    this.WEATHER_API_KEY = '6a78596d062df78380eff5944c4e5567';
    this.WEATHER_API_VERSION = '2.5';
    this.WEATHER_API_URL = `http://api.openweathermap.org/data/${this.WEATHER_API_VERSION}/forecast`;
    this.WEATHER_COUNTRY = 'de';
}


export default new config();
    