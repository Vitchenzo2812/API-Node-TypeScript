import { Router, Request, Response } from 'express';
import { createUserController } from './controllers/createUserController';

const router = Router();
const CreateUserController = new createUserController();

router.get('/', (req: Request, res: Response) => {
    return res.json({
        mensagem: "teste de rota",
    });
});

router.post('/usuarios', CreateUserController.handle);

export { router }