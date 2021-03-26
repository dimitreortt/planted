import React, { FunctionComponent } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../materialUI/theme';

const NotFoundPage: FunctionComponent = ({ history }: any) => {
  console.log('props.history', history);

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      {/* <MuiThemeProvider theme={theme}> */}
      Not Found, simple as that!
      {/* </MuiThemeProvider> */}
    </React.Fragment>
  );
};

export default NotFoundPage;
