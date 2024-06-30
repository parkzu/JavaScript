// src/LoginPage.tsx
import React from 'react';
import { signInWithGoogle } from '../src/firebase';
import { useAuth } from './AuthContext';
import logoimage from './img/logoimage.png';
import google from './img/google.png';
import apple from './img/applelogo.png';
import welcomelogo from './img/welcomelogo.png';
import boat from './img/boat.png';
import team24 from './img/team24.png';
import KakaoLoginButton from 'kakaoLoginButton';

const LoginPage: React.FC = () => {
  // const { login } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      // login(); // 로그인 상태 업데이트
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div className="App">
      <div className="login-form">
        <div id="main">
          <article className="left">
            <div className="links">
              <div id="navbar-brand" className="navbar-brand">
                <img src={logoimage} id="menuimg" alt="logo" />
                <span className="a">Be with & Join & Create Your Team</span>
              </div>
            </div>
            <div className="links2">
              <div className="a1">계정 생성하기</div>
              <hr />
              <div className="a2">이미 계정이 있으신가요?</div>
              <div id="GgCustomLogin">
                <a href="#" onClick={handleGoogleLogin}>
                  <img src={google} id="googlelogo" alt="Google Logo" />
                </a>
                <KakaoLoginButton />
                <div
                  id="appleid-signin"
                  className="signin-button"
                  data-color="black"
                  data-border="true"
                  data-type="sign in"
                >
                  <img src={apple} id="applelogo" alt="Apple Logo" />
                </div>
              </div>
              <div className="links">
                <span className="a3">로그인</span>
              </div>
            </div>
          </article>
          <article className="right">
            <img src={welcomelogo} id="welcomeimg" alt="Welcome Logo" />
            <img src={boat} id="boatimg" alt="Boat Logo" />
            <img src={team24} id="team24" alt="Team24 Logo" />
          </article>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
