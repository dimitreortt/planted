// import React, { useState } from 'react'
// import { useParams, Route } from 'react-router-dom'
// import { App } from '../components/App'
// import LoginPage from '../pages/LoginPage'

// export const PrivateRoute = ({ component, ...rest }) => {
//   const params = useParams()
//   const [isLoggedIn, setIsLoggedIn] = useState(true)

//   return (
//     <>
//       {isLoggedIn ? (
//         <Route component={component} {...rest} />
//       ) : (
//         <Route component={LoginPage} />
//       )}
//     </>
//   )
// }

import React, { Fragment } from 'react';
import useIsLoggedIn from '../FFCore/customHooks/useIsLoggedIn';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../materialUI/theme';
import { setUserId } from '../FFCore/features/ids/idsSlice';

export const PrivateRoute = ({
  component: Component,
  userId,
  setUserId,
  ...rest
}) => {
  const [loading] = useIsLoggedIn(setUserId);

  return (
    <Route
      {...rest}
      component={(props) =>
        loading ? (
          'Loading...'
        ) : userId ? (
          <Component {...props} />
        ) : (
          <Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <LoginPage />
            </MuiThemeProvider>
          </Fragment>
        )
      }
    />
  );
};

const selectUserId = (state) => state.ids.userId;

const mapStateToProps = (state) => ({
  userId: selectUserId(state),
});

const mapDispatchToProps = {
  setUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
