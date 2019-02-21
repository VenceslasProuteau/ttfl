import React from 'react';
import {Dashboard} from './modules/dashboard/Dashboard';

const APP_STATES = {
  DASHBOARD: {
    path: '/dashboard',
    component: Dashboard,
  },
  DECKS: {
    path: '/my-decks',
    component: () => <div>Mes decks</div>,
  },
  TEAM: {
    path: '/my-team',
    component: () => <div>Mon équipe</div>,
  }
}

export {APP_STATES};