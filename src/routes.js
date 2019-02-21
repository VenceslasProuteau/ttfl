import React from 'react';
import { withRouter } from 'react-router-dom';
import { Dashboard } from './modules/dashboard/Dashboard';
import { Team } from './modules/team/Team';
import { Decks } from './modules/decks/Decks';
import { render } from 'enzyme';

class EntryRedirection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.history.replace(APP_STATES.DASHBOARD.path);
  }

  render() {
    return <div></div>
  }
}

const APP_STATES = {
  HOME: {
    path: '/',
    exact: true,
    component: EntryRedirection
  },
  DASHBOARD: {
    path: '/dashboard',
    component: Dashboard,
  },
  DECKS: {
    path: '/my-decks/:startDate',
    component: withRouter(Decks),
  },
  TEAM: {
    path: '/my-team',
    component: Team,
  }
}

export {APP_STATES};