import React, { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoLoginButton: React.FC = () => {
  useEffect(() => {
    const initializeKakaoLogin = () => {
      window.Kakao.init('556d68fa70c9dde6c584b84221eab377');
      window.Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: (authObj: any) => {
          alert(JSON.stringify(authObj));
          window.Kakao.Auth.setAccessToken(
            window.Kakao.Auth.getAccessToken(),
            true,
          );
        },
        fail: (err: any) => {
          alert(JSON.stringify(err));
        },
      });
    };

    // Kakao SDK 스크립트 동적으로 로드
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    kakaoScript.async = true;
    kakaoScript.onload = initializeKakaoLogin;
    document.body.appendChild(kakaoScript);

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거
      document.body.removeChild(kakaoScript);
    };
  }, []);

  return <div id="kakao-login-btn" />;
};

export default KakaoLoginButton;
