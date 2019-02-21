import React from 'react';
import {Route} from 'react-router-dom';
import {APP_STATES} from './routes';
import {Sidebar} from './modules/sidebar/Sidebar';
import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
          <Sidebar />
          <div className="app">
            {Object.values(APP_STATES).map((route, i) =>
              <Route 
                key={i}
                path={route.path} 
                exact={route.exact}
                render={props =>
                  <route.component {...props}/>
                }
              />
            )}
          </div>
      </React.Fragment>
    )
  }
}