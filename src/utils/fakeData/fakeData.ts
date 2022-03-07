import { createUserService } from '../../services/createUserService';
import { v4 as uuid } from 'uuid';

class fakeData{
    
    CreateUserService = new createUserService();

    async execute(){
        await this.CreateUserService.execute({
            id: uuid(),
            name: 'Any User',
            email: 'email@gmail.com'
        });

        await this.CreateUserService.execute({
            id: uuid(),
            name: 'Any User',
            email: ''
        });

    }

    async createUser(){
        const user = await this.CreateUserService.execute({
            id: uuid(),
            name: 'Just Any User',
            email: 'justanyemail@gmail.com'
        });

        return user
    }

}

export { fakeData }