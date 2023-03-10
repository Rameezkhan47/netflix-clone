import React, { useState } from "react";
import HeaderRegister from "../components/HeaderRegister";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import AnimatedPage from "../utils/AnimatedPage";

export default function SignupRegForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleNext = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser){
      console.log(currentUser)
    } ;
  });

  return (
    <AnimatedPage>
      <Container>
        <div className="basicLayout">
          <HeaderRegister login />

          <div className="simpleContainer">
            <div className="centerContainer">
              <form onSubmit={handleNext}>
                <div className="regFormContainer">
                  <div>
                    <div className="stepHeader-Container">
                      <div className="stepHeader">
                        <span className="stepIndicator">
                          STEP <b>1</b> OF <b>3</b>
                        </span>
                        <h1 className="stepTitle">
                          Create a password to start your membership
                        </h1>
                      </div>
                    </div>
                    <div className="contextRow">
                      Just a few more steps and you're finished!
                    </div>
                    <div className="contextRow">We hate paperwork, too.</div>
                    <div className="contain flex column">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="checkbox">
                      {" "}
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        {" "}
                        Please do not email me Netflix special offers.
                      </label>
                    </div>
                  </div>

                  <div className="submitBtnContainer">
                    <button type="sumbit" className="submitBtn">
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </Container>
</AnimatedPage>
  );
}

const Container = styled.div`

.basicLayout{
  display: flex;
  flex-direction:column;
  min-height: 100vh;
  padding-bottom: 0;
  background-color: white;
  color: black;
  
}
.checkbox{
   
  
    line-height: 4;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;

    input{
        margin-top: 1rem;
        width:30px;
        height:30px;
        background:white;
        border:1px solid #555;

    }
    label{

        margin-left: 1rem;
        
    }
    
}
.stepIndicator{
    font-size: 13px;
    text-align: inherit;
    display: block;
    line-height: 19px;
}
  .simpleContainer {
    display: flex;
    width: 100%;
    padding-bottom: 95px;
    flex-grow: 1;
    
  }
  .centerContainer {
    display: block;
    box-sizing: border-box;
    margin: 0 auto 15px;
    max-width: 978px;
    padding: 20px  60px;
}
.regFormContainer{
    margin: 0 auto;
    max-width: 440px;
    text-align: left;
}

.stepHeader {
  display: inline-block;
  margin-top: 20px;
}
.stepTitle{
  display: inline-block
  font-weight: 500;
    margin: 0 0 0.4em;

}
h1{
    font-weight: 550;
}

.contextRow{
   font-size: 19px;
  margin-bottom: 0px;
  margin-top: 10px;
  font-weight: 350;

}
.submitBtnContainer{
  max-width: 340px;

  margin-top: 10px;
  text-align:center;
  font-size: 16px;
  letter-spacing: normal;
  text-size-adjust: 100%;
}
button {

  padding: 0.5rem 2rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 24px;
  min-height: 64px;
  min-width: 120px;
  border-radius: 0.2rem;

  position: relative;
  width:27rem;

}



.contain {
    padding-top: 1rem;
    gap: 0.5rem;
    input {
      padding: 1.2rem 1rem;
      width: 27rem;
    }

  
`;
