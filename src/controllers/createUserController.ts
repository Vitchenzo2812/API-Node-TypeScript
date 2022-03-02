import { Request, Response } from 'express';

class createUserController {
    handle(req: Request, res: Response) {
        return res.json([{
            name: "Guilherme",
            age: 17,
        },
        {
            name: "Gustavo",
            age: 18,
        },
        {
            name: "Daniel",
            age: 16,
        }]);
    }
}

export { createUserController }