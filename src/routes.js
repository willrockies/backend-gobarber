import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Wilson Alves',
    email: 'w.alves.da.silva@avanade.com',
    password_hash: '123456789',
  });
  // return res.json({ message: 'Hello Wilson!' });
  return res.json(user);
});
export default routes;
