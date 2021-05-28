import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alert";
import { getWeather, setLoading } from "../store/actions/weather";
import styled from "styled-components";

const Search = (props: any) => {
  const [cityInput, setCityInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setCityInput(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cityInput.trim() === "") {
      return dispatch(setAlert("INPUT A CITY NAME"));
    }
    dispatch(setLoading());
    dispatch(getWeather(cityInput));
  };

  return (
    <SearchBox>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City name" onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.div`
  margin-top: 20px;

  input {
    height: 35px;
    width: 140px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    font-weight: 500;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
      padding-left: 8px;
      color: #293241;
      font-weight: 500;
    }

    @media (max-width: 500px) {
      background-color: #fff;
      color: #0e0e25;
      border-radius: 0;
      padding-left: 8px;
    }
  }

  button {
    background-color: transparent;
    height: 30px;
    width: 55px;
    border: 2px solid #6290a1;
    border-radius: 10px;

    @media (max-width: 500px) {
      background-color: transparent;
      color: #fff;
      border: 2px solid #0e0e25;
      border-radius: 0;
      height: 35px;
    }
  }
`;
