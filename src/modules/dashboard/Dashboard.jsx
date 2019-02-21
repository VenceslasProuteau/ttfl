import React from 'react';
import { ScheduleService } from 'commons/schedule/schedule.service';
import './dashboard.scss';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.params = props.match.params
  }

  componentDidMount() {
    // return ScheduleService.getRangedSchedule(this.params.date, '2020-01-30')
    //   .then((games) => {
    //     this.setState({
    //       games,
    //       isLoading: false,
    //     });
    //   });
  }

  render() {
    return (
      this.state.isLoading ?
      <div>loading ...</div> :
      <div className="decks">
        <div className="decks__selected-date">
          <div onClick={this.selectDate}>
            {this.state.currentDay}
          </div>
        </div>
        <div className="decks__games-card">
          {this.state.games.map(({
            vTeam,
            hTeam,
            gameId,
            startTime,
          }) =>
            <div className="decks__game-card" key={gameId}>
              <div className="decks__game-card-logo">
                <img src={vTeam.logo}></img>
              </div>
              <div className="decks__game-card-logo">
                VS
                <div>
                  {startTime}
                </div>
              </div>
              <div className="decks__game-card-logo">
                <img src={hTeam.logo}></img>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
