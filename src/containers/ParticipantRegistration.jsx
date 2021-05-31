import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserBioForm from '../components/UserBioForm';
import UserResultForm from '../components/UserResultForm';

function ParticipantRegistration() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [participantData, setParticipantData] = useState({});

    return (
        <div className="registration-container">
            {!isRegistered ? 
                <UserBioForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData}/>
                : <UserResultForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData} participantData={participantData}/>
            }
        </div>
    );
}

export default ParticipantRegistration;
