import { UserService as UserServiceModule } from 'commons/user/user.service';
import { TeamService as TeamServiceModule } from 'commons/team/team.service';
import { DataStore } from 'commons/data-store/data-store.model';

const MyTeamServiceMethod = (UserService, TeamService) => {
  const store = new DataStore('TEAM');
  return {
    fetchDatas() {
      if (store.get().teamId) {
        return Promise.resolve(store.get());
      }
      return UserService.getCurrentUser()
        .then(({ teamId }) => {
          return TeamService.getTeam(teamId)
            .then(({
              name,
              users,
            }) => {
              const promises = users.map(id => UserService.getUser(id));
              return Promise.all(promises)
                .then(users => {
                  const currentTeam = {
                    teamId,
                    name,
                    users
                  };
                  store.set(currentTeam);
                  return currentTeam;
                });
            });
        });
    }
  }
}

export const MyTeamService = new MyTeamServiceMethod(UserServiceModule, TeamServiceModule);