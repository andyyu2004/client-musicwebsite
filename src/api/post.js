import axios from "axios";
import crypto from 'crypto';

export async function uploadFile(e) {
  const { files } = e.target;
  const form = new FormData();
  form.append('foo', files);
  for (let i = 0; i < files.length; i++)
    form.append(`file${i}`, files[i]);
  let file = files[0];

  axios.post(`/api/protected/upload?jwt_token=${sessionStorage.getItem('jwtToken')}`, form)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
}

export async function registerUser(User) {
  const { password } = User;
  const salt = crypto.randomBytes(64).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 100, 512, 'sha512').toString('hex');
  User.password = hash;
  User.salt = salt;
  await axios.post('/api/register', User);
}

export async function signIn(User) {
  const { email, password } = User;
  const resp = await axios.get(`/api/salt/${email}`);
  const salt = resp.data.salt;
  if (!salt) {
    return console.log("Email does not exist");
  }
  const hash = crypto.pbkdf2Sync(password, salt, 100, 512, 'sha512').toString('hex');
  User.password = hash;
  const response = await axios.post('/api/signin', User);
  console.log(response);
  if (!response) {
    return console.log("Incorrect password");
  }
  const { user, token } = response.data;
  sessionStorage.setItem('jwtToken', token);
  sessionStorage.setItem('currUser', user);
  return { user, token };
}