import React from 'react'
import styled from "styled-components";


export default function Footer() {
  return (
    <Container>
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

</Container>
      )
}


const Container = styled.div`



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
