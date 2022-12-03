import React from 'react';

const LearnCard = ({title,description,image}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} className='w-full' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
   
  </div>
</div>
    );
};

export default LearnCard;