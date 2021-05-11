import React from 'react';
import './user-card.scss';

export const UserCard = ({ user }) => console.log('user', user) || 
  <div className="user-card">
    <div className="user-card__col">
      1
    </div>
    <div className="user-card__col">
      {user.pseudo}
    </div>
    <div className="user-card__col">
      5734
    </div>
    <div className="user-card__col">
      Evan Fournier
    </div>
  </div>