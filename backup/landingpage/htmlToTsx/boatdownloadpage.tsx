import React, { useEffect, useRef } from 'react';
import logoimage from './img/logoimage.png';
import { Link } from 'react-router-dom';
import 'boatdownloadpage.css';
import download from './img/download.png';
import 'footer.css';
import 'header.css';
import newlogo from './img/newlogo.png';
import appimg from './img/appdownload.png';

const BoatDownloadPage = () => {
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
    <>
      <div className="page-header">
        <Link to="/">
          <a id="logo-icon" className="logo-icon">
            <img src={newlogo} width="50%" alt="Logo" />
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
            <a className="active">Download</a>
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
        <section className="dmain">
          <div className="downloadweb">
            <h1 className="dtext1">장치에 BOAT 설치하기</h1>
            <p className="dtext2">지금 모여 서로의 하루를 함께하세요</p>
            <div className="downloadweb2">
              <a className="downloadbtn2" href="#">
                Web에서 다운로드
              </a>
            </div>
          </div>
          <div className="downloadwebimg">
            <img src="./logo192.png" width="70%" alt="Logo" />
          </div>
        </section>
        <section className="dmain2">
          <section className="app1">
            <div className="IOS">
              <a className="downloadbtn1" href="#">
                iOS
              </a>
              <img className="appdownload" src={appimg} alt="iOS Download" />
            </div>
          </section>
          <section className="app2">
            <div className="Android">
              <a className="downloadbtn2" href="#">
                Android
              </a>
              <img
                className="appdownload"
                src={appimg}
                alt="Android Download"
              />
            </div>
          </section>
        </section>
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
    </>
  );
};

export default BoatDownloadPage;
