import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';
import ZoomInMapRoundedIcon from '@mui/icons-material/ZoomInMapRounded';
function CreateNote(props) {

    const [expand, setExpand] = useState(false);
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
        setNote({
            title: '',
            content: '',
        });
    }
    const expandIt = () => {
        setExpand(true);
    }
    const backToNormal = () => {
        setExpand(false);
    }
    return (
        <>
            <div className="main_note">
                <form action="">
                    {expand ?
                        <input type="text" name='title' onChange={InputEvent} value={note.title} placeholder='Title' autoComplete='off' /> : null}
                    <textarea onDoubleClick={backToNormal} onClick={expandIt} cols="" name='content' onChange={InputEvent} value={note.content} rows="" placeholder='Write a Note...' ></textarea>
                    {
                        expand ?
                            <ZoomInMapRoundedIcon className='abc' onClick={backToNormal} /> : <ZoomOutMapRoundedIcon className='abc' onClick={expandIt} />}
                    {
                        expand ?
                            <Button onClick={addEvent}>
                                < AddIcon className='plus_sign' />
                            </Button> : null
                    }
                    
                </form>
            </div >
        </>
    )
}

export default CreateNote