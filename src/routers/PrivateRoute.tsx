import { LoginPage } from '../pages/LoginPage';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useIsLoggedIn } from '../hooks/isLoggedIn';

export const PrivateRoute = ({ component, ...rest }: any) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      {isLoggedIn ? (
        <Route component={component} {...rest} />
      ) : (
        <Route component={LoginPage} />
      )}
    </>
  );
};
