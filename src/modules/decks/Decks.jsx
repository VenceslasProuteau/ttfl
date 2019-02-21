import React from 'react';
import { ScheduleService } from 'commons/schedule/schedule.service';
import './decks.scss';

export class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.params = props.match.params;
  }

  componentDidMount() {
    return ScheduleService.getSchedule(this.params.startDate)
      .then((schedule) => {
        console.log('schedule', schedule);
        this.setState({
          currentDate: schedule.date,
          games: schedule.games.filter(({ isFinished }) => !isFinished),
          isLoading: false,
        });
      }).catch((e) => console.log('e', e));
  }

  render() {
    return (
      this.state.isLoading ?
      <div>loading ...</div> :
      <div className="layout-container">
        <div className="decks">
          <div className="decks__current-date">
            {this.state.currentDate}
          </div>
          <div className="decks__games-card">
            {this.state.games.map(({
              vTeam,
              hTeam,
              gameId,
              startTime,
            }) =>
              <div className="decks__game-card" key={gameId}>
                <div className="decks__game-arena">
                  <span>{startTime}</span>
                </div>
                <div className="decks__game-card-wrapper">
                  <div className="decks__game-card-col">
                    <span>{hTeam.fullName}</span>
                    <div className="decks__game-card-logo">
                      <img src={hTeam.logo}></img>
                    </div>
                  </div>
                  <div className="decks__game-card-middle">
                    VS
                  </div>
                  <div className="decks__game-card-col">
                    <div className="decks__game-card-logo">
                      <img src={vTeam.logo}></img>
                    </div>
                    <span>{vTeam.fullName}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
