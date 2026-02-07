import React from 'react';
import Banner from './Banner/Banner';
import Infocards from './Infocards/Infocards';
import Advocate from '../Advocate/Advocate';
import ExpertTeams from './ExpertTeams/ExpertTeams';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import News from './News/News';

const Home = () => {
    return (
        <div>
             
             <Banner></Banner>
             <Infocards></Infocards>
             <Advocate></Advocate>
             <ExpertTeams></ExpertTeams>
             <MakeAppointment></MakeAppointment>
             <News></News>
        </div>
    );
};

export default Home;