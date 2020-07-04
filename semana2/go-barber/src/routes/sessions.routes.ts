import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    return response.json({ ok: true });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
