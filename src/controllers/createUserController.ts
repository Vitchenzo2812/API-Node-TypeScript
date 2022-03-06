import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { createUserService } from '../services/createUserService';

class createUserController { //Cria um usuário
    async handle(req: Request, res: Response) {

        const CreateUserService = new createUserService();

        const name = req.body.name;
        const age = req.body.age;
        const email = req.body.email;
        const id = uuid();

        const user = await CreateUserService.execute({ name, age, email, id });

        if(name.length === 0) { //Verifica se o nome está vazio
            return res.status(400).json({mensagem:`Informe o nome de usuário!`});
        }else{
            return res.status(201).json(user);
        }
    }
}

export { createUserController } //Exporta a classe