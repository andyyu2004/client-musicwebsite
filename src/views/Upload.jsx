import React from 'react';
import { uploadFile } from '../api/post';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

const Upload = () => {
  const server = `/api/protected/upload?jwt_token=${sessionStorage.getItem('jwtToken')}`
  return (
    <div>
      {/* <h3>Upload Screen</h3>
      <form encType="multipart/form-data">
        <input type="file" onChange={uploadFile} multiple/>
      </form> */}
      <FilePond 
        allowMultiple={true}
        oninit={() => handleInit()}
        server={server}
        allowRevert={false}  
        // acceptedFileTypes="audio/*"  
      />
    </div>
  )
}

const handleInit = () => {}


export default Upload;