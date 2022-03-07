import { getConnection } from 'typeorm';
import createConnection from '../database';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { updateUserController } from './updateUserController';
import { fakeData } from '../utils/fakeData/fakeData';

describe('updateUserController', () => {
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

    it('Deve retornar status 204 quando usuário for editado', async () => {
        const mockUser = await FakeData.createUser();
        
        const UpdateUserController = new updateUserController();

        const request = {
            body: {
                id: mockUser.id,
                name: 'Another Name',
                email: 'email@email.com'
            }
        } as Request
        const response = makeMockResponse();

        await UpdateUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    })

})