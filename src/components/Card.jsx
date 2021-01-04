import React from 'react';

const Card = () => {
  return (
    <div className="card__container">
      <div className="card">
        <div className="top__image">
          <img src="./images/bg-pattern-card.svg" alt="" />
        </div>
        <div className="profile__main">
          <div className="avatar__container">
            <div className="avatar">
              <img src="./images/image-victor.jpg" alt="" />
            </div>
          </div>
          <div className="profile__information">
            <div className="profile__identity">
              <h2 className="username">Victor Crest</h2>
              <span className="age">26</span>
            </div>
            <div className="location">London</div>
          </div>
        </div>
        <div className="profile__details">
          <ul className="profile__details__list">
            <li className="followers">
              <div className="number">80K</div>
              <div className="text">Followers</div>
            </li>
            <li className="Likes">
              <div className="number">830K</div>
              <div className="text">Likes</div>
            </li>
            <li className="Photos">
              <div className="number">1.4K</div>
              <div className="text">Photos</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
