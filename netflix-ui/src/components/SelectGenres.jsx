import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";

function SelectGenres(props) {
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    dispatch(
      fetchDataByGenre({
        genre: e.target.value,
        type: props.type,
      })
    );

  };
  return <Select className="flex" onChange={dispatchHandler}>
    {
        props.genres.map((genre)=>{
            return <option key={genre.id} value={genre.id}>{genre.name}</option>

        })
    }
  </Select>;
}
const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
`;
export default SelectGenres;
