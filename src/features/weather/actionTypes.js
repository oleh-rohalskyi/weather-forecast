import fetch from 'cross-fetch';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const appid = "6a78596d062df78380eff5944c4e5567";
const country = "de";

function requestWeather(city) {
    return {
        type: REQUEST_WEATHER,
        city
    }
}

function receiveWeather(list) {
    return {
        type: RECEIVE_WEATHER,
        list
    }
}

export function fetchWeather(city) {

    return function (dispatch) {

        dispatch(requestWeather(city))

        return fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${city},${country}`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => {
                dispatch(receiveWeather(json.list))
            }
            )

    }

}