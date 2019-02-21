import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {reverse} from 'named-urls';
import LocalesService from '../locales/locales.service';
import {APP_STATES} from '../../routes';
import './sidebar.scss';

class SidebarComponent extends React.Component {
  render() {
    const i18n = LocalesService.getLocales();
    return (
      <div className="sidebar">
        <div className="sidebar__user-card">
          <div className="sidebar__user-name">
            CzechVence
          </div>
          <div className="sidebar__user-informations">
            <div className="sidebar__user-informations-row">
              <span className="sidebar__user-informations-label">Mon classement :</span>
              <span className="sidebar__user-informations-value"> 7500</span>
            </div>
            <div className="sidebar__user-informations-row">
              <span className="sidebar__user-informations-label">Mon deck :</span>
              <span className="sidebar__user-informations-value"> Russell Westbrook</span>
            </div>
          </div>
        </div>
        <nav>
          <NavLink
            to={APP_STATES.DASHBOARD.path}
            className="sidebar__item" 
            activeClassName="sidebar__item--selected"
          >
            Dashboard
          </NavLink>

          <NavLink
            to={APP_STATES.DECKS.path}
            className="sidebar__item" 
            activeClassName="sidebar__item--selected"
          >
            Mes decks
          </NavLink>

          <NavLink
            to={APP_STATES.TEAM.path}
            className="sidebar__item" 
            activeClassName="sidebar__item--selected"
          >
            Mon équipe
          </NavLink>
        </nav>
      </div>
    )
  }
}

export const Sidebar = withRouter(SidebarComponent);