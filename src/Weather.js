import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=215576bab28022db35e6e64f040e1b56&units=metric`;

  axios.get(url).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="blue"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
