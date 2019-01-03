import axios from "axios";
import crypto from 'crypto';

export async function registerUser(User) {
  const { password } = User;
  const salt = crypto.randomBytes(64).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
  User.password = hash;
  User.salt = salt;
  await axios.post('/api/register', User);
}

export async function signIn(User) {
  const { email, password } = User;
  const resp = await axios.get(`/api/salt/${email}`);
  const salt = resp.data.salt;
  console.log(salt);
  if (!salt) {
    return console.log("Email does not exist");
  }
  // const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
  // User.password = hash;
  // const response = await axios.post('/api/signin', User);
  // console.log(response);
  // return response;
}