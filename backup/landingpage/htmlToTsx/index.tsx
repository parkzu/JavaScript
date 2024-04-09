import React from 'react';

const LandingPage: React.FC = () => {
  const onMenuClick = () => {
    // Implement your menu click functionality here
  };

  return (
    <html lang="en">
      <head>
        <title>랜딩페이지</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" type="text/css" href="./mLandingPage.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <div className="page-header">
          <a id="logo-icon" className="logo-icon">
            <img src="./logoimage.png" width="50px" alt="logo" />
          </a>
          <a id="menu-icon" className="menu-icon" onClick={onMenuClick}>
            <i className="fa fa-bars" />
          </a>
          <div id="navigation-bar" className="nav-bar">
            <a href="./boatdownloadpage.html"> DownLoad </a>
            <a> How to Use </a>
            <a href="./boataboutuspage.html"> About us </a>
            <a href="./boatsupportpage.html"> Support </a>
          </div>
        </div>
        <hr />
        <div id="body">
          <section className="main">
            <img src="./main1.png" width="80%" />
          </section>
          <section className="main2">
            <img src="./main2.png" width="80%" />
          </section>
          {/* Add more sections as needed */}
        </div>
        <footer>
          <div id="footer">
            <div className="footer-inner">
              {/* Footer content goes here */}
            </div>
          </div>
        </footer>
        <script src="./index.js" />
      </body>
    </html>
  );
};

export default LandingPage;
