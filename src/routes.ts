import { Router, Request, Response } from 'express';
import { createUserController } from './controllers/createUserController';
import { readAllUsersController } from './controllers/readAllUsersController';
import { updateUserController } from './controllers/updateUserController';
import { deleteUserController } from './controllers/deleteUserController';

const router = Router();
const CreateUserController = new createUserController();
const ReadAllUserController = new readAllUsersController();
const UpdateUserController = new updateUserController();
const DeleteUserController = new deleteUserController();

router.get('/', (req: Request, res: Response) => {
    return res.json({
        mensagem: "teste de rota",
    });
});

router.post('/usuarios', CreateUserController.handle);
router.get('/usuarios', ReadAllUserController.handle);
router.patch('/usuario', UpdateUserController.handle);
router.delete('/usuario/:id', DeleteUserController.handle);

export { router }