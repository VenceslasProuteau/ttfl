import React from 'react';
import { UserCard } from 'commons/user/user-card.component'
import { MyTeamService } from './team.service'; 
import './team.scss';

export class Team extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    }
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    MyTeamService.fetchDatas()
      .then((team) => {
        this.setState({
          team,
          isLoading: false,
        });
      });
  }

  create() {

  }

  join() {

  }

  render() {
    return this.state.isLoading
      ? <div>Loading ...</div>
      : <div className="team">
          <div className="team__name">{this.state.team.name}</div>
          <div className="team__users">
            {this.state.team.users.map((user, index) => 
              <UserCard key={index} user={user} />
            )}
          </div>
      </div>
  }
}