import createConnection from '../database';
import { readAllUsersController } from './readAllUsersController';
import { getConnection } from 'typeorm';
import { fakeData } from '../utils/fakeData/fakeData';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('readAllUsersController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM Users');
        await connection.close();
    })

    const FakeData = new fakeData();

    it('Deve retornar status 200 quando pegar todos os usuários', async () => {
        await FakeData.execute();

        const ReadAllUsersController = new readAllUsersController();

        const request = makeMockRequest({});
        const response = makeMockResponse();

        await ReadAllUsersController.handle(request, response);

        expect(response.state.status).toBe(200)
    })
})