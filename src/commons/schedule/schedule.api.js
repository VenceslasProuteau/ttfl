import { callApi } from 'commons/api/api.service';

const getSchedule = (date) => {
  return callApi({
    url: `/schedule/${date}`,
  }).then(data => data)
    .catch(e => e);
};

export {
  getSchedule,
};
