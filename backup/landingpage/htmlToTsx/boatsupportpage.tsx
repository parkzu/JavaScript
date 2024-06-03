import React, { useEffect, useRef } from 'react';
import logoimage from './img/logoimage.png';
import { Link } from 'react-router-dom';
import download from './img/download.png';
import boat from './img/boat.png';
import main11 from './img/main11.png';
import google from './img/googlelogo.png';
import apple from './img/applelogo.png';
import kakao from './img/kakaologo.png';
import updateimg from './img/updatemain.png';
import grid1 from './img/gridimg1.png';
import grid2 from './img/gridimg2.png';
import grid3 from './img/gridimg3.png';
import grid4 from './img/gridimg4.png';
import grid5 from './img/gridimg5.png';
import grid6 from './img/gridimg6.png';
import grid7 from './img/gridimg7.png';
import grid8 from './img/gridimg8.png';
import grid9 from './img/gridimg9.png';
import newlogo from './img/newlogo.png';
import 'boatsupportpage.css';
import 'footer.css';
import 'header.css';

const SupportPage: React.FC = () => {
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
            <a className="btn1">Download</a>
          </Link>
          <Link to="/howtouse">
            <a className="btn1"> How to Use </a>
          </Link>
          <Link to="/aboutus">
            <a className="btn1"> About us </a>
          </Link>
          <Link to="/update">
            <a className="active"> Update </a>
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
        {/* <section className="umain">
          <div className="downloadweb">
            <a className="text1">BOAT 고객 지원</a>
            <br />
            <a className="text2">궁금하신게 있으신가요?</a>
            <br />
          </div>
          <div className="downloadwebimg">
            <img src="./logo192.png" width="70%" alt="Image" />
          </div>
        </section> */}
        <section className="umain">
          <div>
            <img src={updateimg} width="80%" />
          </div>
        </section>
        <section className="umain2">
          <div className="notice">
            <div className="notice2">공지사항</div>
            <ul className="notice3">
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid1} className="innerimg"></img>
                <div>
                  <h1 className="infotext">BOAT 출시임박!</h1>
                  <h3 className="infotext2">2024.05.12</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">안녕하세요</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid2} className="innerimg"></img>
                <div>
                  <h1 className="infotext">테스터 모집</h1>
                  <h3 className="infotext2">2024.04.21</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">구글</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                {' '}
                <section className="inner"></section>
                <img src={grid3} className="innerimg"></img>
                <div>
                  <h1 className="infotext">디자인 수정</h1>
                  <h3 className="infotext2">2024.04.10</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">애플</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid4} className="innerimg"></img>
                <div>
                  <h1 className="infotext">개발자 임시테스트</h1>
                  <h3 className="infotext2">2024.03.30</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">안녕하세요</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid5} className="innerimg"></img>
                <div>
                  <h1 className="infotext">중간과정 결산</h1>
                  <h3 className="infotext2">2024.03.18</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">
                    <img src={apple} width={100}></img>
                    안녕하세요
                  </p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid6} className="innerimg"></img>
                <div>
                  <h1 className="infotext">BOAT 사용성테스트</h1>
                  <h3 className="infotext2">2024.03.14</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">안녕하세요</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid7} className="innerimg"></img>
                <div>
                  <h1 className="infotext">개발 주간현황</h1>
                  <h3 className="infotext2">2024.03.07</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">안녕하세요</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid8} className="innerimg"></img>
                <div>
                  <h1 className="infotext">개발팀의 한마디</h1>
                  <h3 className="infotext2">2024.03.01</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">안녕하세요</p>
                </div>
              </article>
              <article
                className="info"
                style={{
                  opacity: 1,
                  willChange: 'opacity, transform',
                  transform: 'none',
                }}
              >
                <section className="inner"></section>
                <img src={grid9} className="innerimg"></img>
                <div>
                  <h1 className="infotext">BOAT 개발일지</h1>
                  <h3 className="infotext2">2024.02.21</h3>
                </div>
                <div className="infotext3">
                  <p className="infotext4">안녕하세요</p>
                </div>
              </article>
            </ul>
          </div>
        </section>
        <section className="umain2">
          <div>
            <img src={main11} width="100%" />
          </div>
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

export default SupportPage;
