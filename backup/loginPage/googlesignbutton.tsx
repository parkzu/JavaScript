import React, { useEffect } from 'react';

// window.gapi의 타입 정의
declare global {
  interface Window {
    gapi: any; // 더 정확한 타입을 사용하는 것이 좋습니다.
  }
}

const GoogleSignInButton: React.FC = () => {
  useEffect(() => {
    // Define the callback function for successful sign-in
    const onSignIn = (googleUser: any) => {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    };

    // Load Google Sign-In button
    const loadGoogleSignInButton = () => {
      window.gapi.signin2.render('google-signin-button', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: onSignIn,
      });
    };

    // Google API 스크립트 로드 확인
    if (!window.gapi) {
      // Google API script not loaded, load it dynamically
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.onload = loadGoogleSignInButton;
      document.body.appendChild(script);
    } else {
      loadGoogleSignInButton();
    }

    return () => {
      // Clean up
      const googleSignInButton = document.getElementById(
        'google-signin-button',
      );
      if (googleSignInButton) {
        googleSignInButton.innerHTML = ''; // Remove the Google Sign-In button
      }
    };
  }, []);

  return <div id="google-signin-button" className="g-signin2"></div>;
};

export default GoogleSignInButton;
