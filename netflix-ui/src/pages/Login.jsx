import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import AnimatedPage from "../utils/AnimatedPage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) navigate("/");
  // });
  return (
    <AnimatedPage>
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="login-body">
          <div className="form-container flex column a-center j-center">
            <div className="form flex column a-center j-center">
              <div className="contain flex column">
                <div className="title">
                  <h3>Sign In</h3>
                </div>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button onClick={handleLogin}>Sign In</button>
                <div className="login-form-help">
                <div className="checkbox">
                  {" "}
                  <input type="checkbox" id="checkbox" />
                  <span>Remember me</span>
                </div>
                <Link class="login-help-link" to={"/login"}>Need help?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </AnimatedPage>
  );
}
const Container = styled.div`
  .login-body {
    margin: 20px auto;
    max-width: 450px;
  }
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      height: 85vh;
      .form {
        min-height: 660px;
        min-width: 380px;
        width: 100%;
        margin-bottom: 70px;
        padding: 60px 68px 40px;
        background-color: #000000bf;
        color: white;
        .title {
          margin: 0 0 10px;
          font-size: 32px;
          h3 {
            font-weight: 500;
          }
        }
        .contain {
          flex-grow: 1;
          padding-top: 1rem;
          gap: 1rem;
          input {
            color: white;
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            padding: 5px 20px 0;
            width: 20rem;
            background-color: #333333;
            border: none;
            border-radius: 4px;
          }
          button {
            margin-top: 2rem;
            padding: 1rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 4px;
            font-weight: 600;
            font-size: 16px;
          }
          .checkbox{
   
  
            line-height: 1.5;
            display: grid;
            grid-template-columns: 1em auto;
            gap: 0.6em;
            span{
              color: #737373;
              font-size: 14px;
            }
            input{
                margin-top: 0.2rem;
                width:25px;
                height:15px;

        
            }
        }
        .login-form-help{
          display: flex;
          justify-content: space-between;
          a{
            color: #737373;
            text-decoration: none;
            font-size: 14px;
          }
        }
      }
    }
  }
  
`;
