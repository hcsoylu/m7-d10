import { ThunkAction } from "redux-thunk";

import { RootState } from "../index";

import {
  WeatherAction,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../types";

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      if (!resp.ok) {
        const data: WeatherError = await resp.json();
        throw new Error(data.message);
      }
      const data: WeatherData = await resp.json();
      dispatch({
        type: GET_WEATHER,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
