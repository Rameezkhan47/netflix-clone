import React from "react";
import HeaderRegister from "../components/HeaderRegister";
import styled from "styled-components";
import devices from "../assets/devices.png";
import "../signupRegistered.css";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import Footer from "../components/Footer";
import AnimatedPage from "../utils/AnimatedPage";

export default function SignupRegistered() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/signup/regform");
  };

  return (
    <AnimatedPage>
      <Container>
        <div className="basicLayout">
          <HeaderRegister login />

          <div className="simpleContainer">
            <div className="centerContainer">
              <div className="regContainer">
                <div className="stepLogoContainer">
                  <span className="stepLogo">
                    <img src={devices} alt="devices" />
                  </span>
                </div>
                <div className="stepHeader-Container">
                  <div className="stepHeader">
                    <span className="stepIndicator">
                      STEP <b>1</b> OF <b>3</b>
                    </span>
                    <h1 className="stepTitle">
                      Finish setting up your account
                    </h1>
                  </div>
                </div>
                <div className="contextBody">
                  Netflix is personalized for you. Create a password to watch on
                  any device at any time.
                </div>
              </div>
              <div className="submitBtnContainer">
                <button className="submitBtn" onClick={handleNext}>
                  Next
                </button>
              </div>
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
.regContainer{
  max-width: 340px;
  text-align: center;
  margin: 0 auto;
}
.stepLogoContainer{
  display: inline-block;
  text-align: center;

}

.stepLogo{
  margin: 100px 0 20px;
  width: 265px;
  display: block;
  background-size: 260px;
  height: 90px;
  
  img{
    height: 4rem
  }
}
.stepHeader {
  display: inline-block;
}
.stepTitle{
  display: inline-block
  font-weight: 500;
    margin: 0 0 0.4em;
}

.contextBody{
   font-size: 19px;
  margin-bottom: 0;
  margin-top: 0;
  display: inline-block;
  letter-spacing: normal;
  color: (51,51,51)
  direction: ltr;
  max-width: 300px;
  text-size-adjust: 100%;
  
}
.submitBtnContainer{
  max-width: 340px;
  margin 0 auto;
  margin-top: 24px;
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
  min-width: 110px;
  border-radius: 0.2rem;

  position: relative;
  width: 340px;

}
.site-footer-wrapper {
  background-color: #f3f3f3;
  opacity: 1;
  min-width: 190px;
    padding-bottom: 20px;
    position: relative;
    width: 100%;
    color: #737373;
    
}
.footer-divider{
  border-top: 1px solid #e6e6e6;
  height: 0;
  width: 100%;
  color: #737373;
  font-size: 1em;
}
.site-footer{
  margin: 0 auto;
    padding-top: 30px;
    width: 90%;
    position: bottom;
}
.footer-top{

  margin: 0 0 30px;
    display: block;


  
}
.footer-top-a{
  color: #737373;
  text-decoration-line: none;
}
.footer-links{
  
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 13px;
    max-width: 1000px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.footer-link-item{
  list-style: none;
  margin-left: 0;
  box-sizing: border-box;
    display: inline-block;
    margin-bottom: 16px;
    min-width: 100px;
    padding: 0 12px 0 0;
    vertical-align: top;
    width: 25%;
    a{
      color: #737373;    
      text-decoration-line: none;
    }
}
  
`;
