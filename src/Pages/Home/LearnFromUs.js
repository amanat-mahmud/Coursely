import React from 'react';
import expert from "../../assets/icons/expert.png"
import skillUp from "../../assets/icons/self-improvement.png"
import certificate from "../../assets/icons/certificate.png"
import LearnCard from './LearnCard';
const LearnFromUs = () => {
    return (
        <div className='mb-10 mx-10'>
            <h1 className='text-5xl font-bold mb-10'>Why learn from us?</h1>
            <div className='grid grid-cols-3'>
            <LearnCard title={"Skill"}
            description={"Test"}
            image={skillUp}></LearnCard>
            </div>
            
        </div>
    );
};

export default LearnFromUs;