import React from 'react';

const SupportPage: React.FC = () => {
  const onMenuClick = () => {
    // Define what should happen when the menu icon is clicked
  };

  return (
    <>
      <div className="page-header">
        <a id="logo-icon" className="logo-icon" href="./index.html">
          <img src="./logoimage.png" width="50px" alt="Logo" />
        </a>
        <a id="menu-icon" className="menu-icon" onClick={onMenuClick}>
          <i className="fa fa-bars"></i>
        </a>
        <div id="navigation-bar" className="nav-bar">
          <a href="./boatdownloadpage.html"> DownLoad </a>
          <a> How to Use </a>
          <a href="./boataboutuspage.html"> About us </a>
          <a className="active" href="./boatsupportpage.html"> Support </a>
        </div>
      </div>
      <hr />
      <div id="body">
        <section className="main">
          <div className="downloadweb">
            <a className="text1">BOAT 고객 지원</a><br />
            <a className="text2">궁금하신게 있으신가요?</a><br />
          </div>
          <div className="downloadwebimg">
            <img src="./logo192.png" width="70%" alt="Image" />
          </div>
        </section>
        <section className="main2">
          <section className="app1">
            <div className="IOS">
              <a className="downloadbtn" href="#">
                notice
              </a>
            </div>
          </section>
          <section className="app2">
            <div className="Android">
              <a className="downloadbtn" href="#">
                hello
              </a>
            </div>
          </section>
        </section>
      </div>
      <footer>
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
                  <b className="span">|</b>
                  소속 : <b>Team 24</b>
                </div>
              </article>
              <article className="right-list">
                <div className="info">
                  <b>BOAT 앱 다운로드</b>
                </div>
                <div className="right-bottom">
                  <a href="#" className="downloadimg">
                    <img src="./download.png" width="150px" alt="Download" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SupportPage;
