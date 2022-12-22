import React from 'react';

const SingleReview = () => {
    return (
        <div class="review">
              <img
                src="https://images.unsplash.com/photo-1664918696737-db7cf04d28b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                class="review-img hover:scale-150"
                style={{ width: "395px", height: "265px" }}
              />
              <p class="text-center font-bold text-xl">Mikasa ackerman</p>
              <div class="text-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p>
                A very nice watch. I was about to order a second one when I
                noticed that they have raised the price, and now I am waiting
                for it to drop. It may take longer, I am patient. Thumbs up!
              </p>
            </div>
    );
};

export default SingleReview;