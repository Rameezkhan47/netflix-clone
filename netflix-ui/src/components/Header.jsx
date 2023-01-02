import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Container className="flex a-center j-between">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button onClick={() => navigate(props.login ? "/login" : "/login")}>
        Sign In
        </button>
      </Container>
    </div>
  );
}
const Container = styled.div`
padding: 0 1.5rem;
  .logo {
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
`;
