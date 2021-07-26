import React from 'react'
import './Write.scss'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

function Write() {
    return (
        <div className="write">
            <div className="form_write">
                <label htmlFor="inputfile">
                    <AddAPhotoIcon></AddAPhotoIcon>
                </label>
                <input type="file" id="inputfile" style={{ display: "none" }}></input>
                <input type="text" placeholder="Title" className="titleinput" autoFocus={true}></input>
            </div>
            <div className="textarea">
                <textarea type="text" placeholder="Write your content here ..."></textarea>
            </div>
            <div className="publish">
                <button>Publish</button>
            </div>
        </div>
    )
}

export default Write
