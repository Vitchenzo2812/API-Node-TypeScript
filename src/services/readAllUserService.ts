import { getRepository } from 'typeorm';
import { User } from '../entities/user';

class readAllUserService{   
    async execute(){
        const users = await getRepository(User)
            .createQueryBuilder('Users')
            .select()
            .getMany()
            

        console.log(users)
        return users
    }
}

export { readAllUserService }