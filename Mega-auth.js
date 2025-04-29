import { createRequire } from 'module';
import 'dotenv/config';
const require = createRequire(import.meta.url);
const mega = require('megajs');

const storage = mega({
  email: process.env.MEGA_EMAIL,
  password: process.env.MEGA_PASSWORD
});

storage.ready
  .then(() => {
    console.log('success');
  })
  .catch(err => {
    console.error('Login failed:', err.message);
  });
