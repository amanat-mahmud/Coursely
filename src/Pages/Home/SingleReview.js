import React from 'react';

const SingleReview = ({reviewer,reviewerPic,review}) => {
    return (
        <div className="review">
              <img
                src={reviewerPic}
                alt=""
                className="review-img hover:scale-150"
                style={{ width: "395px", height: "265px" }}
              />
              <p className="text-center font-bold text-xl">{reviewer}</p>
              <div className="text-center">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>
                {review}
              </p>
            </div>
    );
};

export default SingleReview;