import React from 'react';

const BoatDownloadPage = () => {
  const onMenuClick = () => {
    // 메뉴 클릭 시 동작하는 로직
  };

  return (
    <div className="page-header">
      <a id="logo-icon" className="logo-icon" href="./index.html">
        <img src="./logoimage.png" width="50px" />
      </a>
      <a id="menu-icon" className="menu-icon" onClick={onMenuClick}>
        <i className="fa fa-bars"></i>
      </a>
      <div id="navigation-bar" className="nav-bar">
        <a href="./boatdownloadpage.html"> DownLoad </a>
        <a> How to Use </a>
        <a className="active" href="./boataboutuspage.html"> About us </a>
        <a href="./boatsupportpage.html"> Support </a>
      </div>
      <hr />
      <div id="body">
        <section className="main">
          <div className="downloadweb">
            <a className="text1">About us</a><br />
            <a className="text2">BOAT?</a><br />
          </div>
        </section>
        <section className="main2">
          <section className="app1">
            <div className="industries">
              <a className="text3">Industries</a> <br />
              <div className="industries2">
                <a className="text4">
                  BOAT는 Team24로부터 시작되어 ... 대충 내용
                  <br />
                </a> <br />
              </div>
            </div>
          </section>
          <section className="app2">
            <img src="logoimage.png" width="80%" />
          </section>
        </section>
      </div>
        <div id="footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-inner">
                <div className="menu">
                  <a href="#">이용약관</a>|
                  <a href="#">개인정보처리방침</a>|
                  <a href="#">제휴문의</a>|
                  <a href="#">이용자보호 비전과 계획</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <article className="left-list">
                <div className="info">
                  명칭 : <b>BOAT</b>
                  <b className="span">|</b> 소속 : <b>Team 24</b>
                </div>
              </article>
              <article className="right-list">
                <div className="info">
                  <b>BOAT 앱 다운로드</b>
                </div>
                <article className="right-bottom">
                  <a href="#" className="downloadimg">
                    <img src="./download.png" width="150px" />
                  </a>
                </article>
                </article>
              </div>
            </div>
          </div>
        </div>
  );
};

export default BoatDownloadPage;
