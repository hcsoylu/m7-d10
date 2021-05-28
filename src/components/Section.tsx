import React from "react";
import styled from "styled-components";
import Search from "../components/Search";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Section = (props: any) => {
  return (
    <Weather>
      <Search />
      <div className="top">
        <p className="top-left">{props.data?.name}</p>
        <p className="top-right">{props.data?.main.temp.toFixed(0)}</p>
      </div>
      <div className="icon">
        <img
          className="icon-img"
          src={`http://openweathermap.org/img/wn/${props.data?.weather[0].icon}@2x.png`}
          alt=""
        />
        <span>
          {props.data?.weather[0].main} - {props.data?.weather[0].description}
        </span>
      </div>
      <div className="bottom">
        <div className="humidity">
          <span className="bold">Humidity</span>
          <span className="number-bottom">{props.data?.main.humidity}</span>
        </div>
        <div className="temp-min">
          <span className="bold">Min</span>
          <div>
            <span className="number-bottom">
              {props.data?.main.temp_min.toFixed(0)}
            </span>
            <BsArrowDown className="arrow" />
          </div>
        </div>
        <div className="temp-max">
          <span className="bold">Max</span>
          <div>
            <span className="number-bottom">
              {props.data?.main.temp_max.toFixed(0)}
            </span>
            <BsArrowUp className="arrow" />
          </div>
        </div>
      </div>
    </Weather>
  );
};

export default Section;

const Weather = styled.div`
  height: 450px;
  width: 600px;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 30px 10px;
  }

  .top-left {
    font-size: 36px;
    padding-left: 20px;
  }

  .top-right {
    padding-right: 60px;
    font-size: 60px;
    font-weight: 300;
    position: relative;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-img {
    height: 100px;
    width: 100px;
  }

  .bottom {
    display: flex;
    padding: 30px;
    padding-top: 40px;
    width: 100%;
  }

  .humidity,
  .temp-min,
  .temp-max {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bold {
    font-weight: 500;
    padding-bottom: 20px;
  }

  .number-bottom {
    font-size: 40px;
  }

  .arrow {
    height: 32px;
    width: 32px;
  }

  @media (max-width: 500px) {
    height: 100vh;
    border-radius: 0;
    padding-top: 30px;
    justify-content: space-between;
    background-color: #498ee9;
    color: #fff;

    .top {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .top-left {
      font-size: 42px;
    }

    .top-right {
      padding: 0;
      padding-top: 20px;
    }
  }
`;
