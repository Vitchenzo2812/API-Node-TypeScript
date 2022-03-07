import { Router, Request, Response } from 'express';
import { createUserController } from './controllers/createUserController';
import { readAllUsersController } from './controllers/readAllUsersController';

const router = Router();
const CreateUserController = new createUserController();
const ReadAllUserController = new readAllUsersController();

router.get('/', (req: Request, res: Response) => {
    return res.json({
        mensagem: "teste de rota",
    });
});

router.post('/usuarios', CreateUserController.handle);

router.get('/usuarios', ReadAllUserController.handle);

export { router }