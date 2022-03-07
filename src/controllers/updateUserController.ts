import { Request, Response } from 'express';
import { updateUserService } from '../services/updateUserService';

class updateUserController{
    async handle(req: Request, res: Response){
        //const id = req.id;

        const UpdateUserService = new updateUserService(); 

        const { id, name, email } = req.body;

        if(id.length === 0) {
            return res.status(400).json({mensagem: 'id não informado'});
        }

        if(name.length === 0){
            return res.status(400).json({mensagem: 'informe um nome'});
        }

        await UpdateUserService.execute({ id, name, email });

        return res.status(204).json();

    }
}

export { updateUserController }
