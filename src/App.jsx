import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Hardware from './Pages/Hardware';
import Software from './Pages/Software';
import Marketing from './Pages/Marketing';
import IOT from './Pages/IOT';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00A8BA',
        secondary: '#0F0'
      },
      secondary: {
        main: '#00F',
        secondary: '#00FFA4'
      },
      text: {
        main: '#000',
        gray: '#707070'
      }
    },
    spacing: 4,
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sistemas">
            <Hardware />
          </Route>
          <Route path="/desarrollo">
            <Software />
          </Route>
          <Route path="/marketing">
            <Marketing />
          </Route>
          <Route path="/iot">
            <IOT />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
