import React from 'react';

const UpcomingCard = ({upcomingCourse}) => {
    // console.log(upcomingCourse);
    const {img,author_img,created_by,creator_position,title,price} = upcomingCourse
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl dark:bg-black border-white border-2 hover:border-[#00b58b]">
            <figure><img src={img} alt="Shoes" 
           style={{width:'380px',height:'220px'}}/></figure>
            <div className="card-body">
                <div className='flex justify-items-center items-center'>
                    <div className="avatar placeholder mr-2">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <img src={author_img} alt="" />
                        </div> 
                    </div>
                    <div>
                        <p>{created_by}</p>
                        <p>{creator_position}</p>
                        </div>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-3xl'>Price: ${price}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;