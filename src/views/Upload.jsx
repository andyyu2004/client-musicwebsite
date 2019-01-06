import React from 'react';
import { uploadFile } from '../api/post';

const Upload = () => (
  <div>
    <h3>Upload Screen</h3>
    <form encType="multipart/form-data">
      <input type="file" onChange={uploadFile} multiple/>
    </form>
  </div>
);


export default Upload;