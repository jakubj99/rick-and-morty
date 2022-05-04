import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AllCharacters from '../components/AllCharacters';
import LikedCharacters from '../components/LikedCharacters';
import Pag from '../components/pagination/Pagination';

function App() {
  return (
    <main>
        <Router>
        <React.StrictMode>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/all-characters" />
            <Route path={'/all-characters'}>
              <AllCharacters />
            </Route>
            <Route path={'/liked-characters'}>
              <LikedCharacters />
            </Route>
          </Switch>
          <Pag/>
          </React.StrictMode>
        </Router>
    </main>
  );
}

export default App;
