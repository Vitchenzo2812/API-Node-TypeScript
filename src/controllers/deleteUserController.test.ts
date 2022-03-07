import { getConnection } from 'typeorm';
import createConnection from '../database';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { deleteUserController } from './deleteUserController';
import { fakeData } from '../utils/fakeData/fakeData';

describe('deleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        connection.runMigrations();
    })
    afterAll(async () => {
        const connection = getConnection();
        await connection.close();
    })

    const FakeData = new fakeData();

    it('Dee retornar status 204 quando o usuário for deletado', async () => {
        const mockUser = await FakeData.createUser();

        const DeleteUserController = new deleteUserController();

        const request = makeMockRequest({
            params: {
                id: mockUser.id,
            }
        });
        const response = makeMockResponse();

        await DeleteUserController.handle(request, response);

        expect(response.state.status).toBe(204);
    })
})