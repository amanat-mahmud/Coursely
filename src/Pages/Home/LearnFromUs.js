import React from 'react';
import expert from "../../assets/icons/expert.png"
import skillUp from "../../assets/icons/self-improvement.png"
import certificate from "../../assets/icons/certificate.png"
import LearnCard from './LearnCard';
const LearnFromUs = () => {
    return (
        <div className='mb-10 mx-10'>
            <h1 className='text-5xl font-bold mb-10'>Why learn from us?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <LearnCard title={"Get Skilled"}
            description={"from thousands of quality courses.Designed by experts."}
            image={skillUp}></LearnCard>
            <LearnCard title={"Expert Tutors"}
            description={"All our courses are designed by experts so that you can get best of the best."}
            image={expert}></LearnCard>
            <LearnCard title={"Certificate"}
            description={"After completing any course with minimum required marks you get certificate."}
            image={certificate}></LearnCard>
            </div>
            
        </div>
    );
};

export default LearnFromUs;