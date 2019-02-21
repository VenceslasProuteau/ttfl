import React from 'react';
import './user-card.scss';

export const UserCard = ({ user }) =>
  <div className="user-card">
    <div className="user-card__name">
      {user.pseudo}
    </div>
  </div>