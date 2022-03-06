import { getRepository } from 'typeorm';
import { User } from '../entities/user';

interface IUser {
    name: string,
    age?: number,
    email?: string
    id: string,
}

class createUserService{
    async execute({ name, age, email, id }: IUser){

        const user = await getRepository(User)
            .createQueryBuilder()
            .where("user.id = :id", { id: 1 })
            .insert()
            .into(User)
            .values([
                { 
                    name: name,
                    age: age,
                    email: email,
                    id: id
                }
            ])
            .execute()

        return user.identifiers[0]
    }
}

export { createUserService }