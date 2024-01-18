import React, { useEffect } from 'react';

function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 3000);
  }, []);
  return <div>Thanks for Logging in</div>;
}

export default LoginSuccess;
