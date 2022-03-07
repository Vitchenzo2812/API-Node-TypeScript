import { Request, Response } from 'express';
import { deleteUserService } from '../services/deleteUserService';

class deleteUserController{
    async handle(req: Request, res: Response){
        const DeleteUserService = new deleteUserService();
        
        const { id } = req.params;

        if(id === undefined){
            return res.status(400).json({mensagem: 'Informe o id na rota'})
        }

        await DeleteUserService.execute({ id })

        return res.status(204).json()
    }
}

export { deleteUserController }