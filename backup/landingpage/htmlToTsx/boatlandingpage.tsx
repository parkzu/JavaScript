import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import main1 from './img/main1.png';
import main2 from './img/main2.png';
import main3 from './img/main3.png';
import main4 from './img/main4.png';
import main5 from './img/main5.png';
import main6 from './img/main6.png';
import main7 from './img/main7.png';
import main8 from './img/main8.png';
import main9 from './img/main9.png';
import main10 from './img/main10.png';
import main11 from './img/main11.png';
import main12 from './img/main12.png';
import main13 from './img/main13.png';
import main14 from './img/main14.png';
import main15 from './img/main15.png';
import main16 from './img/main16.png';
import main17 from './img/main17.png';
import main18 from './img/main18.png';
import logo from './img/logoimage.png';
import download from './img/download.png';
import newlogo from './img/newlogo.png';
import 'boatlandingpage.css';
import 'footer.css';
import 'header.css';
import LoginButton from 'LoginButton';

const LandingPage: React.FC = () => {
  const navigationBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://use.fontawesome.com/releases/v5.2.0/js/all.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onMenuClick = () => {
    // 메뉴 클릭 시 동작
    if (navigationBarRef.current) {
      const navbar = navigationBarRef.current; // navigationBarRef.current를 사용하여 요소에 접근합니다.
      const responsive_class_name = 'responsive';
      navbar.classList.toggle(responsive_class_name);
    }
  };

  return (
    <html lang="en">
      <head>
        <title>랜딩페이지</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" type="text/css" href="./boatlandingpage.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <div className="page-header">
          <Link to="/">
            <a id="logo-icon" className="logo-icon">
              <img src={newlogo} width="50%" alt="logo" />
            </a>
          </Link>
          <a id="menu-icon" className="menu-icon" onClick={onMenuClick}>
            <i className="fa fa-bars"></i>
          </a>
          <div id="navigation-bar" className="nav-bar" ref={navigationBarRef}>
            <Link to="/login">
              <a className="btn2">Login</a>
            </Link>

            <Link to="/download">
              <a className="btn1">Download</a>
            </Link>
            <Link to="/howtouse">
              <a className="btn1"> How to Use </a>
            </Link>
            <Link to="/aboutus">
              <a className="btn1"> About us </a>
            </Link>
            <Link to="/update">
              <a className="btn1"> Update </a>
            </Link>
          </div>
          <div className="loginbtn">
            <Link to="/login">
              <a className="btn">Login</a>
            </Link>
          </div>
        </div>
        <hr />
        <div id="body">
          <section className="landmain">
            <img src={main1} width="80%" />
          </section>
          <section className="landmain2">
            <img src={main2} width="80%" />
          </section>
          <section className="landmain">
            <img src={main3} width="80%" />
          </section>
          <section className="landmain2">
            <img src={main4} width="80%" />
          </section>
          <section className="landmain">
            <img src={main5} width="80%" />
          </section>
          <section className="landmain2">
            <img src={main6} width="80%" />
          </section>
          <section className="landmain">
            <img src={main7} width="80%" />
          </section>
          <section className="landmain2">
            <img src={main8} width="80%" />
          </section>
          <section className="landmain">
            <img src={main9} width="80%" />
          </section>
          <section className="landmain2">
            <img src={main10} width="80%" />
          </section>
          {/* <section className="landmain3">
            <div id="trans">
              <div id="question">
                <img src={main12} width="80%" />
              </div>
              <div>
                <img src={main13} width="80%" />
              </div>
              <div>
                <img src={main14} width="80%" />
              </div>
              <div>
                <img src={main15} width="80%" />
              </div>
              <div>
                <img src={main17} />
              </div>
            </div>
          </section> */}
          <section className="landmain2">
            <img src={main11} width="80%" />
          </section>
          {/* Add more sections as needed */}
        </div>
        <script src="./index.js" />
      </body>
      <footer>
        <div id="footer">
          <div className="landfooter-inner">
            <div className="landfooter-top">
              <div className="landfooter-inner">
                <div className="landmenu">
                  <a href="#">이용약관</a>|<a href="#">개인정보처리방침</a>|
                  <a href="#">제휴문의</a>|
                  <a href="#">이용자보호 비전과 계획</a>
                </div>
              </div>
            </div>
            <div className="landfooter-bottom">
              <div className="landleft-list">
                <div className="landinfo">
                  명칭 :<b>BOAT</b>
                  <b className="landspan">|</b>
                  소속 :<b>Team 24</b>
                </div>
              </div>
              <div className="landright-list">
                <div className="landinfo">
                  <b>BOAT 앱 다운로드</b>
                </div>
              </div>
              <article className="landright-bottom">
                <a href="#" className="landdownloadimg">
                  <img src={download} width="150px" alt="download" />
                </a>
              </article>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
};

export default LandingPage;
