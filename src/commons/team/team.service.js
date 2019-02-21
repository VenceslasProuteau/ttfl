import {FireStore} from '../../services/firestore/store';
import { DataStore } from 'commons/data-store/data-store.model';

const TeamServiceMethod = () => {
  return {
    getTeam(teamId) {
      return FireStore.get().collection('teams').doc(teamId).get()
        .then(doc => doc.data());
    }
  }
}

export const TeamService = new TeamServiceMethod();