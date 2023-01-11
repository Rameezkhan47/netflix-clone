import React from "react";
import "../index.css";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Container className="flex a-center j-between">
        <div className="icon">
          <img className="img" src={logo} alt="logo" />
        </div>
        <a onClick={() => navigate(props.login ? "/login" : "/signup")}>
          Sign In
        </a>

      </Container>
    </div>
  );
}
const Container = styled.div`
border-bottom: 1px solid #e6e6e6;

padding: 0 3rem;
  .icon {
    img {
      height: 5.5rem;
    }
  }
  button {
    padding: 7px 17px;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: 400;
    font-size: 1.05rem;
  }
  a{
    font-weight: 500;
    font-size: 19px;
  }
`;
