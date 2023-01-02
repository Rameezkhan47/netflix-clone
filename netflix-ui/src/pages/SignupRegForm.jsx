import React from "react";
import HeaderRegister from "../components/HeaderRegister";
import styled from "styled-components";
import devices from "../assets/devices.png";
import "../signupRegistered.css";
import { useNavigate } from "react-router-dom";

export default function SignupRegForm() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/signup/regform");
  };
  return (
    <>
      <Test>
        <div className="basicLayout">
          <HeaderRegister login />

          <div className="simpleContainer">
            <div className="centerContainer">
              <form>
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
                    <div className="container flex column">
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
               
                    </div>
                    <div className="checkbox">
                        {" "}
               
                        <input
                          type="checkbox"
                          id="checkbox"
                          
                          
                        />
                                 <label for="checkbox">
                          {" "}
                          Please do not email me Netflix special offers.
                        </label>
                      </div>
                  </div>

                  <div className="submitBtnContainer">
                    <button className="submitBtn" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="site-footer-wrapper">
            <div className="footer-divider"> </div>
            <div className="site-footer">
              <p className="footer-top">
                <a
                  className="footer-top-a"
                  href="https://help.netflix.com/contactus"
                >
                  Questions? Contact us.
                </a>
              </p>
              <ul className="footer-links">
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_faq_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="https://help.netflix.com/support/412"
                    placeholder="footer_responsive_link_faq"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      FAQ
                    </span>
                  </a>
                </li>
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_help_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="https://help.netflix.com"
                    placeholder="footer_responsive_link_help"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      Help Center
                    </span>
                  </a>
                </li>
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_netflix_shop_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="https://netflix.shop/"
                    placeholder="footer_responsive_link_netflix_shop"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      Netflix Shop
                    </span>
                  </a>
                </li>
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_terms_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="https://help.netflix.com/legal/termsofuse"
                    placeholder="footer_responsive_link_terms"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      Terms of Use
                    </span>
                  </a>
                </li>
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_privacy_separate_link_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="https://help.netflix.com/legal/privacy"
                    placeholder="footer_responsive_link_privacy_separate_link"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      Privacy
                    </span>
                  </a>
                </li>
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_cookies_separate_link_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="#"
                    placeholder="footer_responsive_link_cookies_separate_link"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      Cookie Preferences
                    </span>
                  </a>
                </li>
                <li
                  className="footer-link-item"
                  placeholder="footer_responsive_link_corporate_information_item"
                >
                  <a
                    className="footer-link"
                    data-uia="footer-link"
                    href="https://help.netflix.com/legal/corpinfo"
                    placeholder="footer_responsive_link_corporate_information"
                  >
                    <span id="" data-uia="data-uia-footer-label">
                      Corporate Information
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Test>
    </>
  );
}

const Test = styled.div`
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
.container {
    padding-top: 1rem;
    gap: 0.5rem;
    input {
      padding: 1.2rem 1rem;
      width: 27rem;
    }

  
`;
