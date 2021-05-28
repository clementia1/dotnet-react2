import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addParticipant} from '../store/participantsSlice';

export default function ResultRegistrationForm({setParticipantData, setIsRegistered, participantData}) {
    const dispatch = useDispatch();
    const [time, setTime] = useState(0);

    const handleSave = e => {
        e.preventDefault();
        dispatch(addParticipant({...participantData, time}));
        setIsRegistered(false);
    }

    const handleCancel = () => {
        setParticipantData({})
        setIsRegistered(false)
      }

    return (
        <form className="registration-form" onSubmit={handleSave}>
            <h4>Participant</h4>
            <p>{participantData.firstname} {participantData.lastname}</p>
            <p>id: {participantData.id}</p>
            <input
                type="text"
                name="time"
                value={time}
                placeholder="Enter time in seconds"
                onChange={(e) => setTime(e.target.value)}/>
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}