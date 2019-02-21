import React from 'react';
import './category.scss';

export default ({title, subTitle}) =>
  <React.Fragment>
    <div className="category__title">{title}</div>
    <div className="category__sub-title">{subTitle}</div>
  </React.Fragment>
