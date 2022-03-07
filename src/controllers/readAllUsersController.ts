import { Request, Response } from  'express';
import { readAllUserService } from '../services/readAllUserService'

class readAllUsersController{
    async handle(req: Request, res: Response){
        const ReadAllUserService = new readAllUserService();

        const users = await ReadAllUserService.execute();

        return res.status(200).json(users)
    }
}

export { readAllUsersController }