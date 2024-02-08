import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Note() {
  return (
    <>
        <div className="note">
            <h1>title</h1>
            <br />
            <p>this is the content</p>
            <button className='btn'>
                <DeleteOutlineIcon className='deleteIcon' />
            </button>
        </div>
    </>
  )
}

export default Note