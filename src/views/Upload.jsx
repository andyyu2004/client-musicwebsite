import React from 'react';
import axios from 'axios';

const Upload = () => (
  <div>
    <h3>Upload Screen</h3>
    <form encType="multipart/form-data">
      <input type="file" onChange={handleChange} multiple/>
    </form>
  </div>
);

function handleChange(e) {
  const { files } = e.target;
  const form = new FormData();
  form.append('foo', files);
  for (let i = 0; i < files.length; i++)
    form.append(`file${i}`, files[i]);
  axios.post('/api/upload', form)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
}


export default Upload;