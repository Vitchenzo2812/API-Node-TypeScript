import { getConnection } from 'typeorm';
import createConnection from '../database';
import { deleteUserService } from './deleteUserService';
import { fakeData } from '../utils/fakeData/fakeData';

describe('deleteUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        connection.runMigrations();
    })
    afterAll(async () => {
        const connection = getConnection();
        await connection.close();
    })

    const FakeData = new fakeData();

    it('Deve retornar um array vazio quando o usuário for deletado', async () => {
        const mockUser = await FakeData.createUser();

        const DeleteUserService = new deleteUserService();

        const result = await DeleteUserService.execute({ id: mockUser.id });

        expect(result).toHaveLength(0)
    })
})