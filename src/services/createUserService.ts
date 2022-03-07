import { getRepository } from 'typeorm';
import { User } from '../entities/user';

interface IUser {
    id: string,
    name: string,
    email?: string
}

class createUserService{
    async execute({ id, name, email }: IUser){

        const user = await getRepository(User)
            .createQueryBuilder()
            .where("user.id = :id", { id: 1 })
            .insert()
            .into(User)
            .values([
                { 
                    id: id,
                    name: name,
                    email: email
                }
            ])
            .execute()

        return user.identifiers[0]
    }
}

export { createUserService }