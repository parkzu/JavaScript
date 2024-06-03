import React, { useEffect, useRef } from 'react';
import 'index.css';
import 'boathowtousepage.css';
import logoimage from './img/logoimage.png';
import BoatDownloadPage from 'boatdownloadpage';
import { Route, Routes } from 'react-router-dom';
import main1 from './img/main1.png';
import main2 from './img/main2.png';
import download from './img/download.png';
import app from 'App';
import App from 'exPage';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import main18 from './img/main18.png';
import main19 from './img/main19.png';
import main20 from './img/main20.png';
import main21 from './img/main21.png';
import newlogo from './img/newlogo.png';
import 'footer.css';
import 'header.css';

const HowtousePage: React.FC = () => {
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
    <div className="all">
      <header className="page-header">
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
            <a className="active"> How to Use </a>
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
      </header>
      <hr />
      <div id="body">
        <section className="hmain2">
          <img src={main18} width="80%" alt="main2" />
        </section>
        <section className="hmain2">
          <img src={main19} width="100%" alt="main2" />
        </section>
        <section className="hmain3">
          <img src={main20} width="80%" alt="main2" />
        </section>
        <section className="hmain2">
          <img src={main21} width="100%" alt="main1" />
        </section>
        {/* 이하 생략 */}
      </div>
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
    </div>
  );
};

export default HowtousePage;
