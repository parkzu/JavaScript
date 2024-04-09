import React from 'react';

const BoatDownloadPage = () => {
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
          <a className="active" href="./boatdownloadpage.html"> DownLoad </a>
          <a> How to Use </a>
          <a href="./boataboutuspage.html"> About us </a>
          <a href="./boatsupportpage.html"> Support </a>
        </div>
      </div>
      <hr />
      <div id="body">
        <section className="main">
          <div className="downloadweb">
            <h1 className="text1">장치에 BOAT 설치하기</h1>
            <p className="text2">지금 모여 서로의 하루를 함께하세요</p>
            <div className="downloadweb2">
              <a className="downloadbtn2" href="#">Web에서 다운로드</a>
            </div>
          </div>
          <div className="downloadwebimg">
            <img src="./logo192.png" width="70%" alt="Logo" />
          </div>
        </section>
        <section className="main2">
          <section className="app1">
            <div className="IOS">
              <a className="downloadbtn1" href="#">iOS</a>
              <img className="appdownload" src="./appdownload.png" alt="iOS Download" />
            </div>
          </section>
          <section className="app2">
            <div className="Android">
              <a className="downloadbtn2" href="#">Android</a>
              <img className="appdownload" src="./appdownload.png" alt="Android Download" />
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

export default BoatDownloadPage;

function onMenuClick() {
  // 메뉴 클릭 시 동작할 함수 정의
}
