import _ from 'lodash';
import { DataStore } from 'commons/data-store/data-store.model';
import { getSchedule, getRangedSchedule } from './schedule.api';

const ScheduleServiceMethod = () => {
  const store = new DataStore('SCHEDULE');

  return {
    getSchedule(date) {
      const storedDate = date.replace(/-/ig, '');
      const storedDateSchedule = _.get(store.get().schedule, storedDate);

      return storedDateSchedule
        ? Promise.resolve(storedDateSchedule) 
        : getSchedule(date)
            .then(schedule => {
              store.set({
                schedule: { [storedDate]: schedule },
              });
              return schedule;
            });
    },
    getRangedSchedule(startDate, endDate) {
      return getRangedSchedule(startDate, endDate)
        .then(data => {
          console.log('data', data);
          return data;
        });
    },
  }
};

export const ScheduleService = new ScheduleServiceMethod();