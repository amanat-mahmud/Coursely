import React from 'react';

const SingleReview = ({reviewer,reviewerPic,review}) => {
    return (
        <div class="review">
              <img
                src={reviewerPic}
                alt=""
                class="review-img hover:scale-150"
                style={{ width: "395px", height: "265px" }}
              />
              <p class="text-center font-bold text-xl">{reviewer}</p>
              <div class="text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p>
                {review}
              </p>
            </div>
    );
};

export default SingleReview;