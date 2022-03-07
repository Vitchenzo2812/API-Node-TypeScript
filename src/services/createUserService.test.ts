import { getConnection } from 'typeorm';
import createConnection from '../database';
import { createUserService } from './createUserService';

describe('createUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM Users');
        await connection.close();
    })

    it('Deve retornar o id do usuário criado', async () => {
        const CreateUserService = new createUserService();
        
        const result = await CreateUserService.execute({
            id: '58c28074-ed4e-4a2b-aa52-4912d45a81a8',
            name: 'Any User',
            email: 'email@email.com'
        })

        console.log(result)

        expect(result).toHaveProperty('id')
    })
})