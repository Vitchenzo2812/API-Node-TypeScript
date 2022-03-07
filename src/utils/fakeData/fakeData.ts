import { createUserService } from '../../services/createUserService';
import { v4 as uuid } from 'uuid';

class fakeData{
    async execute(){
        const CreateUserService = new createUserService();

        await CreateUserService.execute({
            id: uuid(),
            name: 'Any User',
            email: 'email@gmail.com'
        });

        await CreateUserService.execute({
            id: uuid(),
            name: 'Any User',
            email: ''
        });

    }
}

export { fakeData }