import {useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function ResultRegistrationForm({setParticipantData, setIsRegistered, participantData, handleRegister}) {
    const [time, setTime] = useState(0);

    const handleCancel = () => {
        setParticipantData({})
        setIsRegistered(false)
    }

    return (
        <form className="registration-form" onSubmit={(e) => handleRegister(e, time)}>
            <h3>Participant</h3>
            <p className="user-name">{participantData.firstname} {participantData.lastname}</p>
            <p className="user-info">id: {participantData.id}</p>
            <label htmlFor="time" className="form-label">Result (seconds):</label>
            <Input
                type="text"
                id="time"
                value={time}
                placeholder="Enter time in seconds"
                onChange={(e) => setTime(e.target.value)}/>
            <div className="flex-container">
                <Button style={{width: "100%"}} type="submit" text="Save"/>
                <Button style={{width: "100%"}} onClick={handleCancel} text="Cancel"/>
            </div>
        </form>
    )
}