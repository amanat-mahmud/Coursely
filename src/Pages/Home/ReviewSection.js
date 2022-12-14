import React from "react";
import SingleReview from "./SingleReview";

const ReviewSection = () => {
  return (
    <section id="review" class="mx-5 mb-10">
      <div class="carousel w-full">
        {/* <!-- carousal 1 --> */}
        <div id="slide5" class="carousel-item relative w-full d-flex">
          {/* <!-- product info container--> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <SingleReview></SingleReview>
            <div class="review">
                        <img src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="" class="review-img" style={{width: "395px",
                                height: "265px"}}/>
                        <p class="text-center font-bold text-xl">Izumi Akazawa</p>
                        <div class="text-center">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>This is an impressive watch for the price. Who knows if the diamond chip is really a diamond
                            chip? I think I'd prefer a gold tone band -- the black face is large and stark against the
                            silver. There are gold elements in the band, but they don't really stand out. The watch
                            arrived working. It's in a standard looking watch box.</p>
                    </div>
                    <div class="review">
                        <img src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="" class="review-img" style={{ width: "395px", height: "265px" }}/>
                        <p class="text-center font-bold text-xl">Milly</p>
                        <div class="text-center">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>Honestly the device was amazing.. unfortunately I received one of many defective units.. the
                            device was having issues with the sound crackling after my 3rd day of use. I've researched
                            the issue and found that it's unfortunately common on these S22Ultras so I've returned the
                            device and I look forward to ordering a new one once I complete my return</p>
                    </div>
          </div>
          
          {/* <!-- carousal button --> */}
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" class="btn btn-circle">
              ???
            </a>
            <a href="#slide6" class="btn btn-circle">
              ???
            </a>
          </div>
        </div>
        {/* <!-- carousal 2 --> */}
        <div id="slide6" class="carousel-item relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div class="review">
            <img
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="review-img" style={{width: "395px",
              height: "265px"}}
            />
            <p class="text-center font-bold text-xl">Mei Misaki</p>
            <div class="text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              This is an impressive watch for the price. Who knows if the
              diamond chip is really a diamond chip? I think I'd prefer a gold
              tone band -- the black face is large and stark against the silver.
              There are gold elements in the band, but they don't really stand
              out. The watch arrived working. It's in a standard looking watch
              box.
            </p>
          </div>
          <div class="review">
            <img
              src="https://images.unsplash.com/photo-1564564321441-e96763888581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="review-img" style={{width: "395px",
              height: "265px"}}
            />
            <p class="text-center font-bold text-xl">Sakakibara</p>
            <div class="text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              Honestly the device was amazing.. unfortunately I received one of
              many defective units.. the device was having issues with the sound
              crackling after my 3rd day of use. I've researched the issue and
              found that it's unfortunately common on these S22Ultras so I've
              returned the device and I look forward to ordering a new one once
              I complete my return.
            </p>
          </div>
          <div class="review">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW4lMjBmYWNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="review-img" style={{width: "395px",
              height: "265px"}}
            />
            <p class="text-center font-bold text-xl">Miss Makima</p>
            <div class="text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              A very nice watch. I was about to order a second one when I
              noticed that they have raised the price, and now I am waiting for
              it to drop. It may take longer, I am patient. Thumbs up!
            </p>
          </div>
        </div>
         

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" class="btn btn-circle">
              ???
            </a>
            <a href="#slide7" class="btn btn-circle">
              ???
            </a>
          </div>
        </div>
        {/* <!-- carousal 3--> */}
        <div id="slide7" class="carousel-item relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div class="review">
            <img
              src="https://images.unsplash.com/photo-1597155844518-1b4b3daf8269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFuJTIwZmFjZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="review-img" style={{width: "395px",
              height: "265px"}}
            />
            <p class="text-center font-bold text-xl">Power</p>
            <div class="text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              This is an impressive watch for the price. Who knows if the
              diamond chip is really a diamond chip? I think I'd prefer a gold
              tone band -- the black face is large and stark against the silver.
              There are gold elements in the band, but they don't really stand
              out. The watch arrived working. It's in a standard looking watch
              box.
            </p>
          </div>
          <div class="review">
            <img
              src="https://images.unsplash.com/photo-1596419249688-aecfbe1ae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGh1bWFuJTIwZmFjZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="review-img" style={{width: "395px",
              height: "265px"}}
            />
            <p class="text-center font-bold text-xl">Captain Levi</p>
            <div class="text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              A very nice watch. I was about to order a second one when I
              noticed that they have raised the price, and now I am waiting for
              it to drop. It may take longer, I am patient. Thumbs up!
            </p>
          </div>
          <div class="review">
            <img
              src="https://images.unsplash.com/photo-1609959067540-2018c702724e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGh1bWFuJTIwZmFjZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="review-img" style={{width: "395px",
              height: "265px"}}
            />
            <p class="text-center font-bold text-xl">Denji</p>
            <div class="text-center">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>
              Honestly the device was amazing.. unfortunately I received one of
              many defective units.. the device was having issues with the sound
              crackling after my 3rd day of use. I've researched the issue and
              found that it's unfortunately common on these S22Ultras so I've
              returned the device and I look forward to ordering a new one once
              I complete my return
            </p>
          </div>
        </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" class="btn btn-circle">
              ???
            </a>
            <a href="#slide5" class="btn btn-circle">
              ???
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
