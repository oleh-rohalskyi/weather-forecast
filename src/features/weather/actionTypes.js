import fetch from 'cross-fetch';

import {_WEATHER_API_KEY,_WEATHER_COUNTRY,_WEATHER_API_URL} from 'app.config';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const REQUEST_WEATHER_FAIL = 'REQUEST_WEATHER_FAIL';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export const CALL_FROM_WEATHER_FORM = 'CALL_FROM_WEATHER_FORM';

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

function requestWeatherFail(error) {
    return {
        type: REQUEST_WEATHER_FAIL,
        error
    }
}

export function weatherCharterer(actionType) {
    return function (dispatch) {
        dispatch({type:actionType});
    }
}

export function fetchWeather(city) {

    return function (dispatch) {

        dispatch(requestWeather(city))

        return fetch(`${_WEATHER_API_URL}?appid=${_WEATHER_API_KEY}&q=${city},${_WEATHER_COUNTRY}`)
            .then(
                response => response.json(),
                error => {
                    if (!error && error.message) {
                        dispatch(requestWeatherFail(error))
                    } else {
                        dispatch(requestWeatherFail({message: "Internal Server Error"}))
                    }
                }
            )
            .then(json => {
                if (json.cod === "404")
                    dispatch(requestWeatherFail(json.message))
                else
                    dispatch(receiveWeather(json.list))
            })

    }

}