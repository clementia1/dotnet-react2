import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserRegistrationForm from '../components/UserRegistrationForm';
import ResultRegistrationForm from '../components/ResultRegistrationForm';

function RegistrationContainer() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [participantData, setParticipantData] = useState({});

    return (
        <div className="registration-container">
            {!isRegistered ? 
                <UserRegistrationForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData}/>
                : <ResultRegistrationForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData} participantData={participantData}/>
            }
        </div>
    );
}

export default RegistrationContainer;
