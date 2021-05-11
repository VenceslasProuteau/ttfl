import { callApi } from 'commons/api/api.service';

const getPlayers = (teamId) => {
  return callApi({
    url: `/players/${teamId}`,
  }).then(data => data)
    .catch(e => e);
};

export {
  getPlayers,
};
