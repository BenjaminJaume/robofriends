import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="card bg-primary d-inline-flex flex-wrap m-1 shadow-sm">
      <div className="card-body text-center">
        <img
          className="hoverable"
          src={`https://robohash.org/${id}?size=200x200`}
          alt="Robot"
        />
        <p className="card-title">{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
