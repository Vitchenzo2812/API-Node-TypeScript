import { Request, Response } from 'express';
import { createUserService } from '../services/createUserService';

class createUserController { //Cria um usuário
    handle(req: Request, res: Response) {

        const CreateUserService = new createUserService();

        const name = req.body.name;
        const age = req.body.age;
        const email = req.body.email;

        if(name.length === 0 && age.length === 0 && email.length === 0) { //Verifica se o nome, idade e email estão vazios
            return res.status(400).json({mensagem:`Informe todos os campos!`});
        }

        const user = CreateUserService.execute({ name, age, email });

        if(name.length === 0) { //Verifica se o nome está vazio
            return res.status(400).json({mensagem:`Informe o nome de usuário!`});
        }else if(age.length === 0) { //Verifica se a idade está vazia
            return res.status(400).json({mensagem:`Informe a idade Correta!`});
        }else if(email.lenght === 0) {
            return res.status(400).json({mensagem:`Informe um email válido!`});
        }else{
            return res.status(201).json({ user });
        }
    }
}

export { createUserController } //Exporta a classe