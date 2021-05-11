import React from 'react';
import { Dashboard } from './modules/dashboard/Dashboard';
import { Team } from './modules/team/Team';
import { Decks } from './modules/decks/Decks';
import { DECK_ROUTES } from './modules/decks/route';
import { MainTemplate } from './modules/decks/main-template';

const EntryRedirection = ({ history }) => {
  history.replace(APP_STATES.DASHBOARD.path);
  return null;
};

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
    path: '/decks',
    component: MainTemplate
  },
  TEAM: {
    path: '/team',
    component: Team,
  }
}

export {APP_STATES};