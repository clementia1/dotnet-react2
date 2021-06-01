import {useState} from 'react';
import {nanoid} from 'nanoid';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {useDispatch} from 'react-redux';
import {addCompetition} from '../../store/competitionsSlice';

function CompetitionForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCreate = (e) => {
        e.preventDefault();

        if (name.length == 0) 
            return;
        
        dispatch(addCompetition({name, id: nanoid(10)}));
        setIsSubmitted(true);
    }

    const handleReset = () => {
        setName("");
        setIsSubmitted(false);
    }

    return (
        <form className="competition-form" onSubmit={handleCreate}>
            {isSubmitted
                ? <><h2>Contest added!</h2><Button text="New" onClick={handleReset}/></> 
                : <><h2>Create contest</h2>
                    <label htmlFor="contest-name" className="form-label">Contest name</label>
                    <Input
                        type="text"
                        id="contest-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <Button
                        type="submit"
                        text="Create"/></>}
        </form>
    )
}

export default CompetitionForm;