import { getRepository } from 'typeorm';
import { User } from '../entities/user';

interface IUser{
    id: string;
}

class deleteUserService{
    async execute({ id }: IUser){
        const user = await getRepository(User)
            .createQueryBuilder()
            .delete()
            .from(User)
            .where('id = :id', { id })
            .execute() 
            
        console.log(user);
        return user.raw
    }
}

export { deleteUserService }