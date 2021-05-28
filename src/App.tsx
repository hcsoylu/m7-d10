import { useSelector, useDispatch } from "react-redux";
import Search from "./components/Search";
import Section from "./components/Section";
import { RootState } from "./store";
import { useEffect } from "react";
import { getWeather, setLoading } from "../src/store/actions/weather";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  //const loading = useSelector((state: RootState) => state.weather.loading);
  //const error = useSelector((state: RootState) => state.weather.error);
  //const alertMsg = useSelector((state: RootState) => state.alert.message);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getWeather("Istanbul"));
  }, []);
  return (
    <div className="container">
      <Section data={weatherData} />
    </div>
  );
}

export default App;
