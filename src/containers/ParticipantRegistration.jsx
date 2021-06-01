import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addParticipant } from '../store/competitionsSlice';
import UserProfileForm from './forms/UserProfileForm';
import UserResultForm from './forms/UserResultForm';

function ParticipantRegistration() {
    const params = useParams();
    const dispatch = useDispatch();
    const [isRegistered, setIsRegistered] = useState(false);
    const [participantData, setParticipantData] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(addParticipant({participantData, competitionId: params.id}));
        setIsRegistered(false);
    }

    return (
        <div className="registration-container">
            {!isRegistered ? 
                <UserProfileForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData} />
                : <UserResultForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData} participantData={participantData} handleRegister={handleRegister}/>
            }
        </div>
    );
}

export default ParticipantRegistration;
