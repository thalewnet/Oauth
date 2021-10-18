import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function FLogin() {
  const clientId = '864275854266130';
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    picture: '',
  });
  const responseFacebook = (res) => {
    console.log('Login', res);
    setIsLogged(true);
    setUser((cur) => ({
      ...cur,
      name: res.name,
      email: res.email,
      picture: res.picture.data.url,
    }));
  };
  const onLoginSuccess = (res) => {
    console.log(res);
  };
  const onLogoutSuccess = (res) => {
    setIsLogged(false);
  };

  return (
    <div>
      {!isLogged ? (
        <FacebookLogin
          appId={clientId}
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          onClick={onLoginSuccess}
        />
      ) : (
        <>
          <div
            style={{
              margin: '10px 0',
              display: 'flex',
              backgroundColor: 'lightgray',
              padding: '10px 40px',
              borderRadius: '10px',
            }}
          >
            <p>{user.name}</p>
            {/* <p>{user.email}</p> */}
            <img
              src={user?.picture}
              alt="user-img"
              style={{
                borderRadius: '50%',
                border: '1px solid gray',
                marginLeft: '5px',
              }}
            />
          </div>
          <div style={{ cursor: 'pointer' }} onClick={onLogoutSuccess}>
            Sign Out
          </div>
        </>
      )}
    </div>
  );
}

export default FLogin;
