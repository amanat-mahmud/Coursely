import React from 'react';

const UpcomingCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-items-center items-center'>
                    <div className="avatar placeholder mr-2">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <img src="https://images.unsplash.com/photo-1585402627084-e80d83061b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        </div>
                    </div>
                    <p>Author Name</p>
                </div>
                <h2 className="card-title">Title</h2>
                <p>Price</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;