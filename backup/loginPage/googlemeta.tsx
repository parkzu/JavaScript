import React, { useEffect } from 'react';

const OnSignIn: React.FC = () => {
  useEffect(() => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.error('Google Client ID not found in environment variables.');
      return;
    }

    const meta = document.createElement('meta');
    meta.name = 'google-signin-client_id';
    meta.content = clientId;
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
};

export default OnSignIn;
