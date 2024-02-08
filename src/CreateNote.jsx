import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function CreateNote(props) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    };

    

    const addEvent = () => {
        props.passNote(note);
        setNote ({
            title: '',
            content: '',
        });
    }

    return (
        <>
            <div className="main_note">
                <form action="">
                    <input type="text" name='title' onChange={InputEvent} value={note.title} placeholder='Title' autoComplete='off' />
                    <textarea cols="" name='content' onChange={InputEvent} value={note.content} rows="" placeholder='Write a Note...'></textarea>
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote