import { getConnection } from 'typeorm';
import createConnection from '../database';
import { updateUserService } from './updateUserService'
import { fakeData } from '../utils/fakeData/fakeData'

describe('updateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })
    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM User');
        await connection.close();
    })

    const FakeData = new fakeData();

    it('Deve editar o nome do usuário', async () => {
        const mockUser = await FakeData.createUser();
        
        const UpdateUserService = new updateUserService();

        const result = await UpdateUserService.execute({ 
            id: mockUser.id,
            name: 'Any name' 
        });

        expect(result).toHaveLength(0);
    })
})