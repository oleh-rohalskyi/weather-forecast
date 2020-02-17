export const getUIWeatherData = state => state.weather.list.map(item=>({
    temp: item.main.temp,
    feels_like: item.main.feels_like,
    description: item.weather[0].description, 
    dt_txt: item.dt_txt
}));

export const getWeatherError = state => state.weather.error
