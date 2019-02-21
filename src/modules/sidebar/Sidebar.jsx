import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import format from 'date-fns/format'
import {reverse} from 'named-urls';

import { UserService } from 'commons/user/user.service';
import LocalesService from '../locales/locales.service';
import {APP_STATES} from '../../routes';
import './sidebar.scss';

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    UserService.getCurrentUser()
      .then(user => {
        this.setState({
          user,
          isLoading: false,
        });
      });
  }
  
  render() {
    const i18n = LocalesService.getLocales();
    return this.state.isLoading
    ? <div>isLoading ...</div>
    : (
      <div className="sidebar">
        <div className="sidebar__user-card">
          <div className="sidebar__user-name">
            {this.state.user.pseudo}
          </div>
          <div className="sidebar__user-informations">
            <div className="sidebar__user-informations-row">
              <span className="sidebar__user-informations-value">#7500</span>
              <span className="sidebar__user-informations-trend sidebar__user-informations-trend--up">+497</span>
            </div>
          </div>
        </div>
        <nav>
          <NavLink
            to={APP_STATES.DASHBOARD.path}
            className="sidebar__item" 
            activeClassName="sidebar__item--selected"
          >
            <div className="sidebar__item-icon sidebar__item-icon--dashboard"></div>
            <span className="sidebar__item-label">Tableau de bord</span>
          </NavLink>

          <NavLink
            to={reverse(APP_STATES.DECKS.path, { startDate: format(Date.now(), 'yyyy-MM-dd') })}
            className="sidebar__item" 
            activeClassName="sidebar__item--selected"
          >
            <div className="sidebar__item-icon sidebar__item-icon--decks"></div>
            <span className="sidebar__item-label">Mes decks</span>
          </NavLink>

          {this.state.user.teamId && (<NavLink
            to={APP_STATES.TEAM.path}
            className="sidebar__item" 
            activeClassName="sidebar__item--selected"
          >
            <div className="sidebar__item-icon sidebar__item-icon--team"></div>
            <span className="sidebar__item-label">Mon équipe</span>
          </NavLink>)}
        </nav>
      </div>
    )
  }
}

export const Sidebar = withRouter(SidebarComponent);